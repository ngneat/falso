import { FakeOptions, fake } from './core';
import { data } from './city-name.json';

export function cityName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
