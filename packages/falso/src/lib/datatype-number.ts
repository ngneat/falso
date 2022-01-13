import { FakeOptions, fake } from './core';
import { data } from './datatype-number.json';

// TODO getRandomInRange
export function datatypeNumber<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
