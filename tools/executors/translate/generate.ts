import { readFileSync } from 'fs';
import * as ts from 'typescript';

export function generateStringLiteralsAndSourceFile(rootFilePath: string) {
  const fileContent = readFileSync(rootFilePath, { encoding: 'utf-8' });

  const sourceFile = ts.createSourceFile(
    rootFilePath,
    fileContent.toString(),
    ts.ScriptTarget.ES2015,
    true
  );

  const stringLiterals = getStringLiterals(sourceFile);
  return { stringLiterals, sourceFile };
}

function getStringLiterals(node: ts.Node) {
  let str: string[] = [];
  node.forEachChild((childNode) => {
    if (ts.isArrayLiteralExpression(childNode)) {
      childNode.forEachChild((stringNode) => {
        if (ts.isStringLiteral(stringNode)) {
          str.push(stringNode.getText().replace(/['"]+/g, ''));
        } else {
          str = str.concat(getStringLiterals(stringNode));
        }
      });
    } else {
      str = str.concat(getStringLiterals(childNode));
    }
  });
  return str;
}
