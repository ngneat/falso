import { FakeOptions, fake } from './core';
import { data } from './word.json';

export function word<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
