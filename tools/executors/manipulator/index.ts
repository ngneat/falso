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
  // const content = `
  // export function randAbbreviation<O extends FakeOptions>(options?: O) {
  //   return fake(data, options);
  // }
  // `
  // const sourceFile = project.createSourceFile(`temp.ts`, content, {
  //   overwrite: true,
  // });

  // const decl = sourceFile.getFunction('randAbbreviation');

  // decl.getTypeParameters().forEach(c => {
  //   var split = c.getText().split('extends')
  //   c.replaceWithText(`${c.getText()} = ${split[split.length - 1].trim()}`)
  // })

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

    console.log(funcName);
    decl.getTypeParameters().forEach((c) => {
      var split = c.getText().split('extends');
      c.replaceWithText(`${c.getText()} = ${split[split.length - 1].trim()}`);
    });

    // Manipulate the function

    // sourceFile.formatText({ tabSize: 2 });

    // writeFileSync(path, sourceFile.getText(), { encoding: 'utf8' });
  }

  return { success: true };
}
