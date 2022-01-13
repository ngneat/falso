import { FakeOptions, fake } from './core';
import { data } from './ethereum-address.json';

export function ethereumAddress<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
