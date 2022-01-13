import { FakeOptions, fake } from './core';
import { data } from './bs-adjective.json';

export function bsAdjective<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
