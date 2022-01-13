import { FakeOptions, fake } from './core';
import { data } from './img-city.json';

export function imgCity<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
