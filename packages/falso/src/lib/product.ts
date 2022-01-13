import { FakeOptions, fake } from './core';
import { data } from './product.json';

export function product<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
