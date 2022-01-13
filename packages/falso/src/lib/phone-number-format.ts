import { FakeOptions, fake } from './core';
import { data } from './phone-number-format.json';

// TODO what is this data?
export function phoneNumberFormat<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
