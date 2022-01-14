import { FakeOptions, fake } from './core';
import { data } from './locale.json';

export function locale<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
