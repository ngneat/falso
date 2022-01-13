import { FakeOptions, fake } from './core';
import { data } from './animal-type.json';

export function animalType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
