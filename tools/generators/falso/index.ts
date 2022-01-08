import { Tree, getProjects, formatFiles, names } from '@nrwl/devkit';
import { join } from 'path';
import { appendFile } from 'fs/promises';

export default async function (tree: Tree, { name, project }: { name: string, project: string }) {

  const sourceRoot = getProjects(tree).get(project)?.sourceRoot;

  const n = names(name);

  if (sourceRoot) {
    tree.write(join(sourceRoot, 'lib', `${n.fileName}.ts`), ` 
      import { rand } from './core';
      
      export function ${n.propertyName}() {
        return rand([

        ])
      }
    `)

    const index = join(sourceRoot, `index.ts`);

    const exportStatement = `export { ${n.propertyName} } from './lib/${n.fileName}';\n`;

    await appendFile(index, exportStatement, { encoding: 'utf-8' });

    await formatFiles(tree);
  }
}
