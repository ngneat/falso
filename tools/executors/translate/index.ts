import { ExecutorContext } from '@nrwl/devkit';
import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  statSync,
  unlinkSync,
} from 'fs';
import { basename, join } from 'path';
import * as ts from 'typescript';
import { addBuildTargets } from './add-build-target';
import { JSON_FILE_EXTENSION, TYPE_SCRIPT_FILE_EXTENSION } from './constants';
import { copyCoreFiles } from './copy-core';
import { createConfigFiles } from './create-config';
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
    const projectJSONPath = join(
      context.root,
      context.workspace.projects[context.projectName].root,
      'project.json'
    );
    const jsonFilePaths = readdirSync(projectLibPath).filter((p) =>
      p.includes(JSON_FILE_EXTENSION)
    );

    manageLanguageIndexFiles(options);

    console.info(`Will be translating ${jsonFilePaths.length} files.\n`);

    for (let jsonFileName of [jsonFilePaths[0]]) {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          resolve();
        }, 100)
      );
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

    // copy core files
    copyCoreFiles(options, projectLibPath);

    // create config files
    createConfigFiles(options);

    // add build targets
    addBuildTargets(options, projectJSONPath);

    console.info(
      "Translation complete. Please make sure to export from package's index file"
    );

    return { success };
  } catch (e) {
    console.error(e);
    return { e };
  }
}
