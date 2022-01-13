import { FakeOptions, fake } from './core';
import { data } from './url.json';

// TODO should we use internal methods
export function url<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
