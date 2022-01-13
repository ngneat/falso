import { FakeOptions, fake } from './core';
import { data } from './city-suffix.json';

export function citySuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
