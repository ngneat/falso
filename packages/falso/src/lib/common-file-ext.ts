import { FakeOptions, fake } from './core';
import { data } from './common-file-ext.json';

export function commonFileExt<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
