import { FakeOptions, fake } from './core';
import { data } from './datatype-hexa-decimal.json';

export function datatypeHexaDecimal<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
