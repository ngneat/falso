import { FakeOptions, fake } from './core';
import { data } from './datatype-float.json';

// TODO user getRandomInRange
export function datatypeFloat<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
