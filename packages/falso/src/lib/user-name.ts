import { FakeOptions, fake } from './core';
import { data } from './user-name.json';

export function userName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
