import { FakeOptions, fake } from './core';
import { data } from './sentences.json';

// TODO - generate programmatically
export function sentences<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
