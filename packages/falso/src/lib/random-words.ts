import { FakeOptions, fake } from './core';
import { data } from './random-words.json';

export function randomWords<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
