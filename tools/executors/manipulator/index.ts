import { ExecutorContext, names } from '@nrwl/devkit';
import { Project, QuoteKind, ScriptTarget } from 'ts-morph';
import { sync } from 'glob';
import { basename } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const project = new Project({
  manipulationSettings: {
    quoteKind: QuoteKind.Single,
  },
  compilerOptions: {
    target: ScriptTarget.ES2015,
  },
});

export default async function manipulator(
  options: Record<string, any>,
  context: ExecutorContext
) {
  const funcsPaths = sync('packages/falso/src/lib/*.ts');

  for (const path of funcsPaths) {
    const baseName = basename(path).replace('.ts', '');

    const { className } = names(baseName);
    const funcName = `rand${className}`;
    const content = readFileSync(path).toString();

    const sourceFile = project.createSourceFile(`temp.ts`, content, {
      overwrite: true,
    });

    const decl = sourceFile.getFunction(funcName);

    // Manipulate the function

    sourceFile.formatText({ tabSize: 2 });

    writeFileSync(path, sourceFile.getText(), { encoding: 'utf8' });
  }

  return { success: true };
}
