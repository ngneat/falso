import { FakeOptions, fake } from './core';
import { data } from './currency-symbol.json';

export function currencySymbol<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
