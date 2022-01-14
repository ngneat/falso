import { FakeOptions, fake } from './core';
import { data } from './credit-card-number.json';

// TODO - support formats and generate programmatically
export function creditCardNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
