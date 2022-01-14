import { FakeOptions, fake } from './core';
import { data } from './ipv6.json';

// TODO - generate programmatically
export function ipv6<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
