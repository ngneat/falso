import { FakeOptions, fake } from './core';
import { data } from './phrase.json';

export function phrase<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
