import { tsquery } from '@phenomnomnominal/tsquery';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { basename, join } from 'path';
import { format } from 'prettier';
import * as ts from 'typescript';
import { COMMENT, UNICODE_REGEXP } from './constants';
import { EchoExecutorOptions } from './options';
import { translateText } from './translate';

export function writeExportStatements(
  options: EchoExecutorOptions,
  translationIndex: string
) {
  for (const language of options.languages) {
    const outputDir = join(options.output, language);
    const languageIndex = join(outputDir, `index.ts`);
    if (existsSync(outputDir) && existsSync(languageIndex)) {
      const exportStatement = `${COMMENT}\nexport * as ${language} from './${language}';\n`;
      appendFileSync(translationIndex, exportStatement, {
        encoding: 'utf-8',
      });
    }
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
  const JSONfileNameWExt = basename(filePath, '.ts') + '.i18n.json';

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
  let tsFileContent = readFileSync(outputFilePath, {
    encoding: 'utf-8',
  }).toString();
  if (!tsFileContent.includes('data')) {
    tsFileContent = tsFileContent
      .replace(/(?:\s)\s/g, '')
      .replace(
        `import { rand } from './core';`,
        `import { rand } from './core';\nimport { data } from './${JSONfileNameWExt}';\n\n`
      )
      .replace(new RegExp(/(\[(.*)\])/g), 'data');
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
  const identifierName = tsquery<ts.Identifier>(
    ast,
    'FunctionDeclaration>Identifier'
  )[0];
  let tsFileContent = `import { rand } from '../../core';
import { data } from './${JSONfileNameWExt}';

export function ${identifierName.text}() {
  return rand(data);
}
    `;

  tsFileContent = format(tsFileContent, { singleQuote: true });

  writeFileSync(outputFilePath, tsFileContent, { encoding: 'utf-8' });

  const index = join(outputDir, `index.ts`);

  const fileNameWOExt = basename(filePath, '.ts');

  const exportStatement = `${COMMENT}\nexport * from './${fileNameWOExt}';\n`;

  appendFileSync(index, exportStatement, { encoding: 'utf-8' });
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

function translateTransformer<T extends ts.Node>(
  stringLiterals: string[]
): ts.TransformerFactory<T> {
  return (context) => {
    const visit: ts.Visitor = (node) => {
      if (ts.isStringLiteral(node) && node.getText() === "'./core'") {
        return ts.factory.createStringLiteral('../../core');
      } else if (ts.isArrayLiteralExpression(node)) {
        return ts.factory.updateArrayLiteralExpression(
          node,
          stringLiterals.map((s) => ts.factory.createStringLiteral(s, true))
        );
      }
      return ts.visitEachChild(node, (child) => visit(child), context);
    };

    return (node) => ts.visitNode(node, visit);
  };
}
