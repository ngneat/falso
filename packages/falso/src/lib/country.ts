import { FakeOptions, fake } from './core';
import { data } from './country.json';

export function country<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
