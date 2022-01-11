import {
  appendFileSync,
  existsSync,
  mkdirSync,
  unlinkSync,
  writeFileSync,
} from 'fs';
import { basename, join } from 'path';
import * as ts from 'typescript';
import { COMMENT, UNICODE_REGEXP } from './constants';
import { EchoExecutorOptions } from './options';
import { translateText } from './translate';

export function writeExportStatements(
  options: EchoExecutorOptions,
  translationIndex: string
) {
  for (const language of options.languages) {
    console.info(
      `Appending export statement for language ${language} in ${translationIndex}`
    );
    const outputDir = join(options.output, language);
    const languageIndex = join(outputDir, `index.ts`);
    if (existsSync(outputDir) && existsSync(languageIndex)) {
      const exportStatement = `${COMMENT}
export * as ${language} from './${language}';\n`;
      appendFileSync(translationIndex, exportStatement, {
        encoding: 'utf-8',
      });
    }
  }
}

export async function writeTranslation(
  options: EchoExecutorOptions,
  language: string,
  stringLiterals: string[],
  sourceFile: ts.SourceFile,
  printer: ts.Printer,
  filePath: string
) {
  const outputDir = join(options.output, language);

  const tText = await translateText(stringLiterals, language);

  const result = ts.transform(sourceFile, [translateTransformer(tText)]);

  let content = printer.printFile(result.transformed[0]);

  // convert unicodes to string
  content = content.replace(UNICODE_REGEXP, (match, grp) => {
    return String.fromCharCode(parseInt(grp, 16));
  });

  content = `${COMMENT}\n` + content;

  const fileNameWExt = basename(filePath);

  const outputFilePath = join(outputDir, fileNameWExt);

  console.info(`Writing translated file at: ${outputFilePath}`);

  // Write pretty printed transformed typescript to output directory
  writeFileSync(outputFilePath, content);

  const index = join(outputDir, `index.ts`);

  const fileNameWOExt = basename(filePath, '.ts');

  const exportStatement = `${COMMENT}
export * from './${fileNameWOExt}';\n`;

  console.info(`Writing export statement at: ${index}`);

  appendFileSync(index, exportStatement, { encoding: 'utf-8' });
}

export function manageLanguageIndexFiles(options: EchoExecutorOptions) {
  for (const language of options.languages) {
    console.info(`Deleting index file for language: ${language}`);
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
