import { FakeOptions, fake } from './core';
import { data } from './random-alpha-numeric.json';
// TODO rename?
export function randomAlphaNumeric<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
