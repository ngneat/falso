import { FakeOptions, fake } from './core/core';
import { data } from './prefix.json';

// TODO
/*
rename to titlePrefix?
support all title options https://en.wikipedia.org/wiki/Title
add support for category
 */
export function randPrefix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
