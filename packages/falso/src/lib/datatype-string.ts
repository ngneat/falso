import { FakeOptions, fake } from './core';
import { data } from './datatype-string.json';

// TODO - generate programmatically
export function datatypeString<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
