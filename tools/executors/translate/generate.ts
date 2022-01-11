import { readFileSync } from 'fs';
import * as ts from 'typescript';
import { tsquery } from '@phenomnomnominal/tsquery';

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

/**
 * Traverse through each child of node, find array of strings and return the same
 * @example For example, consider below code:
 * export function abbreviation() {
 *  return rand([
 *   'SCSI',
 *   'SMTP'
 *  ]);
 * }
 * For above code, it will return array of strings (['SCSI', 'SMTP']),
 * which is passed as argument to `rand` function
 */
function getStringLiterals(node: ts.Node) {
  let ast = tsquery.ast(node.getFullText());
  const arrayLiteralExpressionNode = tsquery<ts.ArrayLiteralExpression>(
    ast,
    'ArrayLiteralExpression'
  )[0];

  if (
    arrayLiteralExpressionNode?.elements.every((n) => ts.isStringLiteral(n))
  ) {
    return arrayLiteralExpressionNode.elements.map((e) =>
      e.getText().replace(/['"]+/g, '')
    );
  } else {
    return [];
  }
}
