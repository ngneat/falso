import { FakeOptions, fake } from './core/core';
import { data } from './litecoin-address.json';

// TODO - generate programmatically
export function randLitecoinAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
