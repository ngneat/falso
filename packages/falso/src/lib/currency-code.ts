import { FakeOptions, fake } from './core';
import { data } from './currency-code.json';

export function currencyCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
