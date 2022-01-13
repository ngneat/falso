import { FakeOptions, fake } from './core';
import { data } from './img-nature.json';

export function imgNature<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
