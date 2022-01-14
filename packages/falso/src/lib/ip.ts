import { FakeOptions, fake } from './core/core';
import { data } from './ip.json';

// TODO - generate programmatically
export function ip<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
