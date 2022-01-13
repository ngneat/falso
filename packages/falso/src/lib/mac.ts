import { FakeOptions, fake } from './core';
import { data } from './mac.json';

export function mac<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
