import { FakeOptions, fake } from './core/core';
import { data } from './secondary-address.json';

// TODO - generate programmatically
export function secondaryAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
