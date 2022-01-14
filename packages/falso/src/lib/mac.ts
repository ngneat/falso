import { FakeOptions, fake } from './core/core';
import { data } from './mac.json';

// TODO - generate programmatically
export function mac<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
