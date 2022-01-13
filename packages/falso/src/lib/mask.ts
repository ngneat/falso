import { FakeOptions, fake } from './core';
import { data } from './mask.json';

export function mask<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
