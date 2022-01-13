import { FakeOptions, fake } from './core';
import { data } from './sentence.json';

export function sentence<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
