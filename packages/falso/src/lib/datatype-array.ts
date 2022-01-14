import { FakeOptions, fake } from './core/core';
import { data } from './datatype-array.json';

// TODO - generate programmatically
export function datatypeArray<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
