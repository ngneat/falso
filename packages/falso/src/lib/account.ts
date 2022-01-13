import { FakeOptions, fake } from './core';
import { data } from './account.json';

export function account<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
