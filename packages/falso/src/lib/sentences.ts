import { FakeOptions, fake } from './core';
import { data } from './sentences.json';

export function sentences<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
