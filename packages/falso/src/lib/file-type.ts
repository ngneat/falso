import { FakeOptions, fake } from './core';
import { data } from './file-type.json';

export function fileType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
