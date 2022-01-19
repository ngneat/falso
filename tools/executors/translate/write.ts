import { tsquery } from '@phenomnomnominal/tsquery';
import {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { basename, join } from 'path';
import * as ts from 'typescript';
import { COMMENT, TYPE_SCRIPT_FILE_EXTENSION } from './constants';
import { EchoExecutorOptions } from './options';
import { translateJSON } from './translate';

/**
 * Write export statements for each generated file to language's index file
 */
export function writeExportStatements(options: EchoExecutorOptions) {
  for (const language of options.languages) {
    const outputDir = join(options.output, language);
    createLanguageIndexFile(outputDir);
  }
}

export async function writeTranslation(
  options: EchoExecutorOptions,
  projectLibPath: string,
  jsonFileName: string,
  TSFileName: string,
  language: string
) {
  const rootJSONFilePath = join(projectLibPath, jsonFileName);
  const outputDir = join(options.output, language);
  const outJSONFilePath = join(outputDir, jsonFileName);

  const jsonData = JSON.parse(readFileSync(rootJSONFilePath).toString());

  const translatedJSONData = await translateJSON(jsonData, language);

  writeFileSync(
    outJSONFilePath,
    JSON.stringify(translatedJSONData, null, 2) + '\n',
    {
      encoding: 'utf-8',
    }
  );

  const rootTSFilePath = join(projectLibPath, TSFileName);
  const outTSFilePath = join(outputDir, TSFileName);

  copyFileSync(rootTSFilePath, outTSFilePath);

  updateCorePath(outTSFilePath);
}

function updateCorePath(TSFilePath: string) {
  let tsFileContent = readFileSync(TSFilePath, {
    encoding: 'utf-8',
  }).toString();

  tsFileContent = tsFileContent.replace(
    `'./core/core';`,
    `'../../lib/core/core';`
  );

  writeFileSync(TSFilePath, tsFileContent, { encoding: 'utf-8' });
}

export function createLanguageIndexFile(outputDir: string) {
  const index = join(outputDir, `index.ts`);

  appendFileSync(index, `${COMMENT}\n`, { encoding: 'utf-8' });

  readdirSync(outputDir)
    .filter(
      (fileName) =>
        fileName.includes(TYPE_SCRIPT_FILE_EXTENSION) && fileName !== 'index.ts'
    )
    .forEach((fileName) => {
      const outFilePath = join(outputDir, fileName);
      const fileNameWOExt = basename(fileName, TYPE_SCRIPT_FILE_EXTENSION);

      const functionName = camelCase(`rand-${fileNameWOExt}`);

      const exportStatement = `export { ${functionName} } from './${fileNameWOExt}';\n`;

      appendFileSync(index, exportStatement, { encoding: 'utf-8' });
    });
}

export function manageLanguageIndexFiles(options: EchoExecutorOptions) {
  if (!existsSync(options.output)) {
    mkdirSync(options.output);
  }
  for (const language of options.languages) {
    const outputDir = join(options.output, language);
    if (!existsSync(outputDir)) {
      mkdirSync(outputDir, { recursive: true });
    } else {
      const index = join(outputDir, `index.ts`);

      if (existsSync(index)) {
        unlinkSync(index);
      }
    }
  }
}

function getFunctionName(filePath: string): string {
  let functionName = '';

  const fileContent = readFileSync(filePath, { encoding: 'utf-8' });

  const sourceFile = ts.createSourceFile(
    filePath,
    fileContent.toString(),
    ts.ScriptTarget.ES2015,
    true
  );

  let ast = tsquery.ast(sourceFile.getFullText());

  const functionIdentifierNode = tsquery<ts.Identifier>(
    ast,
    'FunctionDeclaration:has(ExportKeyword)>Identifier'
  );

  if (functionIdentifierNode?.length) {
    functionName = functionIdentifierNode
      .map((n) => n.text)
      .reduce((p, c) => (p ? p + ', ' + c : c), '');
  }

  return functionName;
}

function camelCase(fileNameWithDashes: string): string {
  return fileNameWithDashes
    .split('-')
    .reduce((p, c) => p + capitalizeFirstLetter(c));
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
