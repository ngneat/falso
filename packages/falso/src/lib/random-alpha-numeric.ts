import { FakeOptions, fake } from './core/core';
import { data } from './random-alpha-numeric.json';

// TODO - generate programmatically
export function randomAlphaNumeric<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
