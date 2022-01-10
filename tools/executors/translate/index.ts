import { ExecutorContext } from '@nrwl/devkit';
import { existsSync, statSync, unlinkSync } from 'fs';
import { join } from 'path';
import * as ts from 'typescript';
import { generateStringLiteralsAndSourceFile } from './generate';
import { EchoExecutorOptions } from './options';
import {
  deleteLanguageIndexFiles,
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
    const printer = ts.createPrinter();

    deleteLanguageIndexFiles(options);

    console.info(`Will be translating ${options.path.length} files.\n`);

    for (let filePath of options.path) {
      const rootFilePath = join(context.root, filePath);
      const fileStats = statSync(rootFilePath);

      const isFile = fileStats.isFile();
      if (isFile) {
        console.info(`Reading content from ${rootFilePath}`);

        const { stringLiterals, sourceFile } =
          generateStringLiteralsAndSourceFile(rootFilePath);

        if (stringLiterals && stringLiterals.length) {
          for (const language of options.languages) {
            await writeTranslation(
              options,
              language,
              stringLiterals,
              sourceFile,
              printer,
              filePath
            );
          }
        } else {
          console.info(`No string-literals found in file ${rootFilePath}\n`);
        }
      } else {
        console.error(`File: ${rootFilePath} does not exist or is not file!`);
      }
    }

    const translationIndex = join(options.output, `index.ts`);
    console.info(`Deleting translations index file from : ${translationIndex}`);
    if (existsSync(translationIndex)) {
      unlinkSync(translationIndex);
    }

    writeExportStatements(options, translationIndex);

    console.info(
      "Translation complete. Please make sure to export from package's index file"
    );

    return { success };
  } catch (e) {
    console.error(e);
    return { e };
  }
}
