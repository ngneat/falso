import { FakeOptions, fake } from './core';
import { data } from './bs-buzz.json';

export function bsBuzz<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
