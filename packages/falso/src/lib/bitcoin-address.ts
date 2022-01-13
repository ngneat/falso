import { FakeOptions, fake } from './core';
import { data } from './bitcoin-address.json';

export function bitcoinAddress<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
