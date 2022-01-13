import { FakeOptions, fake } from './core';
import { data } from './file-path.json';

export function filePath<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
