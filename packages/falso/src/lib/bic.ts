import { FakeOptions, fake } from './core';
import { data } from './bic.json';

export function bic<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
