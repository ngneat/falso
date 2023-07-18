import { ExecutorContext } from '@nx/devkit';
import { Project, QuoteKind, ScriptTarget } from 'ts-morph';
import { sync } from 'glob';
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
    const content = readFileSync(path).toString();

    const sourceFile = project.createSourceFile(`temp.ts`, content, {
      overwrite: true,
    });

    const decl = sourceFile
      .getFunctions()
      .find((f) => f.getName().startsWith('rand'));

    if (decl.getName() === 'rand') {
      continue;
    }

    // Manipulate the function

    sourceFile.formatText({ tabSize: 2 });

    writeFileSync(path, sourceFile.getText(), { encoding: 'utf8' });
  }

  return { success: true };
}
