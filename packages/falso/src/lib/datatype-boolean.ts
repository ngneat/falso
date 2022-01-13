import { FakeOptions, fake } from './core';
import { data } from './datatype-boolean.json';

export function datatypeBoolean<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
