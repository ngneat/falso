import { FakeOptions, fake } from './core';
import { data } from './datatype-array.json';

export function datatypeArray<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
