import { ExecutorContext, runExecutor } from '@nrwl/devkit';
import { sync } from 'glob';
import { renameSync, rm, rmSync, writeFileSync } from 'fs';
import * as path from 'path';
import { dirname } from 'path';

interface BuildLocalesOptions {
  localesOutputPath: string;
  localesSourcePath: string;
  falsoSourcePath: string;
}

interface LocaleBuildConfig {
  outputPath: string;
  entryFile: string;
  tsConfig: string;
  language: string;
}

/**
 * Build all locales.
 *
 * @param options
 * @param context
 */
export default async function buildLocales(
  options: BuildLocalesOptions,
  context: ExecutorContext
) {
  const localeBuildConfigs = createLocaleBuildConfigs(options);

  if (localeBuildConfigs.length > 0) {
    console.info(
      `Build locales for ${localeBuildConfigs
        .map((value) => value.language)
        .join(', ')}.`
    );
  } else {
    console.info(`No locales found in "${options.localesSourcePath}" ...`);
  }

  const result = await Promise.all(
    localeBuildConfigs.map(async (buildConfig: LocaleBuildConfig) => {
      setupLocaleBuild(buildConfig);

      const buildResult = await buildLocale(buildConfig, context);

      tearDownLocaleBuild(buildConfig);

      if (buildResult.success) {
        cleanupBuildArtifacts(buildConfig);
      }

      return buildResult;
    })
  );

  for (let res of result) {
    if (!res.success) return res;
  }

  return { success: true };
}

/**
 * Given the options, create build configs for all existing locales.
 *
 * @param localesOutputPath
 * @param localesSourcePath
 * @param falsoSourcePath
 */
function createLocaleBuildConfigs({
  localesOutputPath,
  localesSourcePath,
  falsoSourcePath,
}: BuildLocalesOptions): LocaleBuildConfig[] {
  return sync(`${localesSourcePath}/*/index.ts`).map((entryFile: string) => {
    const language = dirname(entryFile).split(path.sep).pop();

    return {
      language,
      outputPath: `${localesOutputPath}/${language}`,
      entryFile: `${falsoSourcePath}/index_${language}.ts`,
      tsConfig: `${localesSourcePath}/${language}/tsconfig.json`,
    };
  });
}

/**
 * Build secondary entrypoint, by running the original build target with custom
 * build configuration.
 *
 * @param buildConfig
 * @param context
 */
async function buildLocale(
  buildConfig: LocaleBuildConfig,
  context: ExecutorContext
): Promise<{ success: boolean }> {
  const buildResults = await runExecutor(
    { project: 'falso', target: 'build' },
    { ...buildConfig, assets: [] },
    context
  );

  for await (let buildResult of buildResults) {
    if (!buildResult.success) return buildResult;
  }

  return { success: true };
}

/**
 * Create necessary file for a proper build of the secondary entry point.
 *
 * @param buildConfig
 */
function setupLocaleBuild(buildConfig: LocaleBuildConfig): void {
  writeFileSync(
    buildConfig.entryFile,
    `export * from './lib/locales/${buildConfig.language}';`
  );

  writeFileSync(
    buildConfig.tsConfig,
    `{
  "extends": "../../../../tsconfig.json",
  "compilerOptions": {
    "outDir": "../../../../../../dist/out-tsc",
    "declaration": true,
    "types": []
  },
  "include": ["**/*.ts"],
  "exclude": ["**/*.spec.ts"]
}
`
  );
}

/**
 * Remove files, that are created for a proper build of the secondary entry
 * points.
 *
 * @param buildConfig
 */
function tearDownLocaleBuild(buildConfig: LocaleBuildConfig): void {
  rmSync(buildConfig.tsConfig);
  rmSync(buildConfig.entryFile);
}

/**
 * Rename index[_language].* files to index.* files and create a minimal
 * package.json file for a secondary entrypoint.
 *
 * @param buildConfig
 */
function cleanupBuildArtifacts(buildConfig: LocaleBuildConfig): void {
  sync(`${buildConfig.outputPath}/index_*`).forEach((indexFilePath) =>
    renameSync(indexFilePath, indexFilePath.replace(/_[a-z]+./g, '.'))
  );

  writeFileSync(
    `${buildConfig.outputPath}/package.json`,
    `{
  "main": "./index.cjs.js",
  "module": "./index.esm.js",
  "typings": "./index.d.ts"
}`
  );
}
