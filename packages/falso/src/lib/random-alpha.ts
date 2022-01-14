import { FakeOptions, fake } from './core';
import { data } from './random-alpha.json';

// TODO - generate programmatically
export function randomAlpha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
