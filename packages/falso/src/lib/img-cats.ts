import { FakeOptions, fake } from './core';
import { data } from './img-cats.json';

export function imgCats<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
