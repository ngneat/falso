import { FakeOptions, fake } from './core';
import { data } from './county.json';

export function county<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
