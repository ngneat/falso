import { Tree, getProjects, formatFiles, names } from '@nrwl/devkit';
import { join } from 'path';
import { appendFile } from 'fs/promises';

enum FileType {
  Spec = 'spec.ts',
  Ts = 'ts',
  Json = 'json',
}

interface NewFalsoOptions {
  name: string;
  project: string;
  json: boolean;
  skipTest: boolean;
}

export default async function (tree: Tree, options: NewFalsoOptions) {
  const sourceRoot = getProjects(tree).get(options.project)?.sourceRoot;

  const n = names(options.name);

  if (sourceRoot) {
    tree.write(
      getFilePath(sourceRoot, n.fileName, FileType.Ts),
      `
      import { FakeOptions, fake } from './core/core';
      ${options.json ? `import { data } from './${n.fileName}.json'` : ''}

      /**
       * Generate a random ${n.name}.
       *
       * @category TBD
       *
       * @example
       *
       * ${n.propertyName}()
       *
       * @example
       *
       * ${n.propertyName}({ length: 10 })
       *
       */
      export function ${
        n.propertyName
      }<Options extends FakeOptions>(options?: Options) {
        return fake(${options.json ? 'data' : `() => 1`}, options);
      }
    `
    );

    if (options.json) {
      tree.write(
        getFilePath(sourceRoot, n.fileName, FileType.Json),
        `
        {
          "data": [
          ]
        }
      `
      );
    }

    if (!options.skipTest) {
      tree.write(
        getFilePath(sourceRoot, n.fileName, FileType.Spec),
        `
          import { ${n.propertyName} } from '../lib/${n.fileName}';
    
          describe('${n.propertyName}', () => {
            it('should create', () => {
              expect(${n.propertyName}).toBeTruthy();
            });	
          });
        `
      );
    }

    const index = join(sourceRoot, `index.ts`);

    const exportStatement = `export { ${n.propertyName} } from './lib/${n.fileName}';\n`;

    await appendFile(index, exportStatement, { encoding: 'utf-8' });

    await formatFiles(tree);
  }
}

function getFilePath(
  rootPath: string,
  filename: string,
  fileType: FileType
): string {
  return join(
    rootPath,
    fileType == FileType.Spec ? 'tests' : 'lib',
    `${filename}.${fileType}`
  );
}
