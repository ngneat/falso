import { FakeOptions, fake } from './core';
import { data } from './img-technics.json';

export function imgTechnics<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
