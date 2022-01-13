import { FakeOptions, fake } from './core';
import { data } from './ingverb.json';

export function ingverb<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
