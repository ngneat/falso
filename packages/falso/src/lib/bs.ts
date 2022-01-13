import { FakeOptions, fake } from './core';
import { data } from './bs.json';

export function bs<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
