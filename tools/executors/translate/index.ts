import { ExecutorContext } from '@nrwl/devkit';
import { readdirSync, statSync } from 'fs';
import { basename, join } from 'path';
import { JSON_FILE_EXTENSION } from './constants';
import { generateRollupConfig } from './generate-rollup-config';
import { EchoExecutorOptions } from './options';
import {
  manageLanguageIndexFiles,
  writeExportStatements,
  writeTranslation,
} from './write';

export default async function translateExecutor(
  options: EchoExecutorOptions,
  context: ExecutorContext
) {
  console.info(`Executing "translate"...`);
  console.info(`Options: ${JSON.stringify(options, null, 2)}`);

  try {
    const success = true;
    const projectLibPath = join(
      context.root,
      context.workspace.projects[context.projectName].sourceRoot,
      'lib'
    );
    const jsonFilePaths = readdirSync(projectLibPath).filter((p) =>
      p.includes(JSON_FILE_EXTENSION)
    );

    manageLanguageIndexFiles(options);

    console.info(`Will be translating ${jsonFilePaths.length} files.\n`);

    for (let jsonFileName of [jsonFilePaths[0]]) {
      const TSFileName = basename(jsonFileName, '.json') + '.ts';
      const rootJSONFilePath = join(projectLibPath, jsonFileName);
      const fileStats = statSync(rootJSONFilePath);

      const isFile = fileStats.isFile();
      if (isFile) {
        // and then for languages
        for (const language of options.languages) {
          await writeTranslation(
            options,
            projectLibPath,
            jsonFileName,
            TSFileName,
            language
          );
        }
      } else {
        console.error(
          `File: ${rootJSONFilePath} does not exist or is not file!`
        );
      }
    }

    // write export statements everywhere
    writeExportStatements(options);

    // generate rollup config
    generateRollupConfig(options);

    console.info('Translation complete. rollup.config.js generated');

    return { success };
  } catch (e) {
    console.error(e);
    return { e };
  }
}
