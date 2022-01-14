import { FakeOptions, fake } from './core';
import { data } from './datatype-hexa-decimal.json';

// TODO - generate programmatically
export function datatypeHexaDecimal<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
