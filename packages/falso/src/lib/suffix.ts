import { FakeOptions, fake } from './core/core';
import { data } from './suffix.json';

// TODO rename?
export function randSuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
