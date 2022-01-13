import { FakeOptions, fake } from './core';
import { data } from './account-name.json';

export function accountName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
