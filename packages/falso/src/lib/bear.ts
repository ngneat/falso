import { FakeOptions, fake } from './core';
import { data } from './bear.json';

export function bear<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
