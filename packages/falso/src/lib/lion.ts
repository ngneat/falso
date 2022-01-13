import { FakeOptions, fake } from './core';
import { data } from './lion.json';

export function lion<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
