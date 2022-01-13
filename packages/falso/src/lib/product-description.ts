import { FakeOptions, fake } from './core';
import { data } from './product-description.json';

export function productDescription<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
