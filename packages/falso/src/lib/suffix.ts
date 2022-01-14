import { FakeOptions, fake } from './core/core';
import { data } from './suffix.json';

// TODO rename?
export function suffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
