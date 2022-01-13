import { FakeOptions, fake } from './core';
import { data } from './random-word.json';

export function randomWord<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
