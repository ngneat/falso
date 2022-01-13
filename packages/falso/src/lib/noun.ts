import { FakeOptions, fake } from './core';
import { data } from './noun.json';

export function noun<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
