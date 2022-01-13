import { FakeOptions, fake } from './core';
import { data } from './common-file-name.json';

export function commonFileName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
