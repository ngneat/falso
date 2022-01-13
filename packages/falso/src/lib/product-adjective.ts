import { FakeOptions, fake } from './core';
import { data } from './product-adjective.json';

export function productAdjective<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
