import { FakeOptions, fake } from './core';
import { data } from './common-file-type.json';

export function commonFileType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
