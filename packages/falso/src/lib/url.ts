import { FakeOptions, fake } from './core/core';
import { data } from './url.json';

// TODO - generate programmatically
export function url<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
