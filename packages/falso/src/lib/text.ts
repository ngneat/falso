import { FakeOptions, fake } from './core/core';
import { data } from './text.json';

// TODO - generate programmatically
export function randText<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
