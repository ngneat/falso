import { FakeOptions, fake } from './core';
import { data } from './cat.json';

export function cat<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
