import { FakeOptions, fake } from './core';
import { data } from './product-material.json';

export function productMaterial<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
