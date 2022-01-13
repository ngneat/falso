import { FakeOptions, fake } from './core';
import { data } from './product-name.json';

export function productName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
