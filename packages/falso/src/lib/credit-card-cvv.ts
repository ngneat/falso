import { FakeOptions, fake } from './core';
import { data } from './credit-card-cvv.json';

export function creditCardCVV<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
