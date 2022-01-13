import { FakeOptions, fake } from './core';
import { data } from './secondary-address.json';

export function secondaryAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
