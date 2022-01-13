import { FakeOptions, fake } from './core';
import { data } from './ipv6.json';

export function ipv6<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
