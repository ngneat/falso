import { FakeOptions, fake } from './core';
import { data } from './country-code.json';

export function countryCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
