import { FakeOptions, fake } from './core';
import { data } from './img-fashion.json';

export function imgFashion<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
