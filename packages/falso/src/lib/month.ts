import { fake, FakeOptions } from './core';
import { data } from './month.json';

export function month<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
