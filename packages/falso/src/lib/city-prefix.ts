import { FakeOptions, fake } from './core';
import { data } from './city-prefix.json';

export function cityPrefix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
