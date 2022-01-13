import { FakeOptions, fake } from './core';
import { data } from './currency-name.json';

export function currencyName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
