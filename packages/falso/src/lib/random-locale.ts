import { FakeOptions, fake } from './core';
import { data } from './random-locale.json';

export function randomLocale<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
