import { FakeOptions, fake } from './core';
import { data } from './img-food.json';

export function imgFood<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
