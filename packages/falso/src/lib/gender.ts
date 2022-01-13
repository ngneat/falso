import { FakeOptions, fake } from './core';
import { data } from './gender.json';

export function gender<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
