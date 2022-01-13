import { FakeOptions, fake } from './core';
import { data } from './suffixes.json';

// TODO rename company suffixes?
export function suffixes<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
