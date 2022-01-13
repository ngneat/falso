import { FakeOptions, fake } from './core';
import { data } from './fish.json';

export function fish<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
