import { FakeOptions, fake } from './core';
import { data } from './text.json';

// TODO - generate programmatically
export function text<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
