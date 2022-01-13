import { FakeOptions, fake } from './core';
import { data } from './file-name.json';

export function fileName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
