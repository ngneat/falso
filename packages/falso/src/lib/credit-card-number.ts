import { FakeOptions, fake } from './core';
import { data } from './credit-card-number.json';

export function creditCardNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
