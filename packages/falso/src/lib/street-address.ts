import { FakeOptions, fake } from './core';
import { data } from './street-address.json';

export function streetAddress<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
