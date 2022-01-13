import { FakeOptions, fake } from './core';
import { data } from './img-animals.json';

export function imgAnimals<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
