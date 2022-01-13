import { FakeOptions, fake } from './core';
import { data } from './file-ext.json';

export function fileExt<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
