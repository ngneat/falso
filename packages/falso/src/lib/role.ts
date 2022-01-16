import { fake, FakeOptions } from './core/core';
import { data } from './role.json';

export function randRole<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
