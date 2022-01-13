import { FakeOptions, fake } from './core';
import { data } from './random-image.json';

export function randomImage<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
