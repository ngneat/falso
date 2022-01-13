import { FakeOptions, fake } from './core';
import { data } from './bs-noun.json';

export function bsNoun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
