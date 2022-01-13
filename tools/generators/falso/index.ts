import { Tree, getProjects, formatFiles, names } from '@nrwl/devkit';
import { join } from 'path';
import { appendFile } from 'fs/promises';

export default async function (
  tree: Tree,
  { name, project, json }: { name: string; project: string; json: boolean }
) {
  const sourceRoot = getProjects(tree).get(project)?.sourceRoot;

  const n = names(name);

  if (sourceRoot) {
    if (json) {
      tree.write(
        join(sourceRoot, 'lib', `${n.fileName}.json`),
        `
        {
          "data": [
          ]
        }
      `
      );
    }

    tree.write(
      join(sourceRoot, 'lib', `${n.fileName}.ts`),
      `
      import { FakeOptions, fake } from './core';
      ${json ? `import { data } from './${n.fileName}.json'` : ''}

      export function ${
        n.propertyName
      }<Options extends FakeOptions>(options?: Options) {
        return fake(${json ? 'data' : '[]'}, options);
      }
    `
    );

    const index = join(sourceRoot, `index.ts`);

    const exportStatement = `export { ${n.propertyName} } from './lib/${n.fileName}';\n`;

    await appendFile(index, exportStatement, { encoding: 'utf-8' });

    await formatFiles(tree);
  }
}
