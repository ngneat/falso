import { ExecutorContext } from '@nx/devkit';
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
} from 'fs';
import { join } from 'path';
import * as ts from 'typescript';
import { TYPE_SCRIPT_FILE_EXTENSION } from './constants';
import { generateStringLiteralsAndSourceFile } from './generate';
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
    options.path = options.path.map((p) => p + TYPE_SCRIPT_FILE_EXTENSION);
    options.output = join(projectLibPath, options.output);

    manageLanguageIndexFiles(options);

    console.info(`Will be translating ${options.path.length} files.\n`);

    // for (let filePath of options.path) {
    for (let filePath of readdirSync(projectLibPath)) {
      await new Promise<void>((resolve, reject) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
      const rootFilePath = join(projectLibPath, filePath);
      const fileStats = statSync(rootFilePath);

      const isFile = fileStats.isFile();
      if (isFile) {
        let { stringLiterals, sourceFile } =
          generateStringLiteralsAndSourceFile(rootFilePath);

        if (!stringLiterals?.length) {
          console.info(`No string-literals found in file ${rootFilePath}\n`);

          if (
            existsSync(
              rootFilePath.replace(TYPE_SCRIPT_FILE_EXTENSION, '.json')
            )
          ) {
            stringLiterals = JSON.parse(
              readFileSync(
                rootFilePath.replace(TYPE_SCRIPT_FILE_EXTENSION, '.json')
              ).toString()
            ).data;
          }
        }

        if (stringLiterals?.length) {
          // create i18n.json for existing files
          await writeTranslation(options, stringLiterals, sourceFile, filePath);

          // and then for languages
          for (const language of options.languages) {
            await writeTranslation(
              options,
              stringLiterals,
              sourceFile,
              filePath,
              language
            );
          }
        }
      } else {
        console.error(`File: ${rootFilePath} does not exist or is not file!`);
      }
    }

    // delete translations/index.ts file if present
    // const translationIndex = join(options.output, `index.ts`);
    // if (existsSync(translationIndex)) {
    //   unlinkSync(translationIndex);
    // }

    // write export statements everywhere
    // TODO: Un-comment below
    // writeExportStatements(options, translationIndex);

    // console.info(
    //   "Translation complete. Please make sure to export from package's index file"
    // );

    return { success };
  } catch (e) {
    console.error(e);
    return { e };
  }
}
