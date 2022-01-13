import { FakeOptions, fake } from './core';
import { data } from './random-hexa-decimal.json';

export function randomHexaDecimal<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
