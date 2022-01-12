import { tsquery } from '@phenomnomnominal/tsquery';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { basename, join } from 'path';
import { format } from 'prettier';
import * as ts from 'typescript';
import { COMMENT, TYPE_SCRIPT_FILE_EXTENSION } from './constants';
import { EchoExecutorOptions } from './options';
import { translateText } from './translate';

/**
 * Write export statements for each generated file to language's index file
 */
export function writeExportStatements(
  options: EchoExecutorOptions,
  translationIndex: string
) {
  appendFileSync(translationIndex, `${COMMENT}\n`, {
    encoding: 'utf-8',
  });
  for (const language of options.languages) {
    const outputDir = join(options.output, language);
    createLanguageIndexFile(outputDir);
    const exportStatement = `export * as ${language} from './${language}';\n`;
    appendFileSync(translationIndex, exportStatement, {
      encoding: 'utf-8',
    });
  }
}

export async function writeTranslation(
  options: EchoExecutorOptions,
  stringLiterals: string[],
  sourceFile: ts.SourceFile,
  filePath: string,
  language?: string
) {
  let outputDir: string, tText: string[];
  if (language) {
    outputDir = join(options.output, language);
    tText = await translateText(stringLiterals, language);
  } else {
    outputDir = options.output.substring(0, options.output.lastIndexOf('/'));
    tText = stringLiterals;
  }

  // Generate i18n.json file content
  const { JSONfileNameWExt, outputFilePath } = createI18NJsonFile(
    tText,
    filePath,
    outputDir
  );

  if (language) {
    createLanguageFiles(
      sourceFile,
      JSONfileNameWExt,
      outputFilePath,
      outputDir,
      filePath
    );
  } else {
    updateDefaultFiles(outputFilePath, JSONfileNameWExt);
  }
}

function createI18NJsonFile(
  tText: string[],
  filePath: string,
  outputDir: string
) {
  const JSONContent = JSON.stringify({ data: tText }, null, 2);

  // JSON File name
  const JSONfileNameWExt = basename(filePath, '.ts') + '.json';

  // Output JSON File path
  const outputJSONFilePath = join(outputDir, JSONfileNameWExt);

  // Write json content
  writeFileSync(outputJSONFilePath, JSONContent);

  // TS File name
  const fileNameWExt = basename(filePath);

  // Output TS File path
  const outputFilePath = join(outputDir, fileNameWExt);
  return { JSONfileNameWExt, outputFilePath };
}

function updateDefaultFiles(outputFilePath: string, JSONfileNameWExt: string) {
  // Get original ts content
  let tsFileContent = readFileSync(outputFilePath, {
    encoding: 'utf-8',
  }).toString();

  // update it only if not already updated
  if (!tsFileContent.includes('data')) {
    tsFileContent = tsFileContent
      .replace(/(?:\s)\s/g, '') // remove white spaces
      .replace(
        `import { rand } from './core';`,
        `import { rand } from './core';\nimport { data } from './${JSONfileNameWExt}';\n\n`
      ) // add import data statement
      .replace(new RegExp(/(\[(.*)\])/g), 'data'); // replace array literal with `data`

    tsFileContent = format(tsFileContent, { singleQuote: true });

    writeFileSync(outputFilePath, tsFileContent, { encoding: 'utf-8' });
  }
}

function createLanguageFiles(
  sourceFile: ts.SourceFile,
  JSONfileNameWExt: string,
  outputFilePath: string,
  outputDir: string,
  filePath: string
) {
  const ast = tsquery.ast(sourceFile.getFullText());

  // start - get function name and prepare ts content
  const functionIdentifier = tsquery<ts.Identifier>(
    ast,
    'FunctionDeclaration>Identifier'
  )[0];
  if (functionIdentifier) {
    let tsFileContent = `import { rand } from '../../core';
  import { data } from './${JSONfileNameWExt}';
  
  export function ${functionIdentifier.text}() {
    return rand(data);
  }
      `;
    // end

    tsFileContent = format(tsFileContent, { singleQuote: true });

    writeFileSync(outputFilePath, tsFileContent, { encoding: 'utf-8' });
  }
}

export function createLanguageIndexFile(outputDir: string) {
  const index = join(outputDir, `index.ts`);

  appendFileSync(index, `${COMMENT}\n`, { encoding: 'utf-8' });

  readdirSync(outputDir)
    .filter(
      (filePath) =>
        filePath.includes(TYPE_SCRIPT_FILE_EXTENSION) && filePath !== 'index.ts'
    )
    .forEach((filePath) => {
      const fileNameWOExt = basename(filePath, TYPE_SCRIPT_FILE_EXTENSION);

      const exportStatement = `export * from './${fileNameWOExt}';\n`;

      appendFileSync(index, exportStatement, { encoding: 'utf-8' });
    });
}

export function manageLanguageIndexFiles(options: EchoExecutorOptions) {
  for (const language of options.languages) {
    const outputDir = join(options.output, language);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir);
    } else {
      const index = join(outputDir, `index.ts`);

      if (existsSync(index)) {
        unlinkSync(index);
      }
    }
  }
}
