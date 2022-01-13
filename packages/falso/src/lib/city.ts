import { FakeOptions, fake } from './core';
import { data } from './city.json';

export function city<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
