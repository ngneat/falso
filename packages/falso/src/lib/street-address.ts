import { FakeOptions, fake } from './core';
import { data } from './street-address.json';

// TODO - generate programmatically number + street name
export function streetAddress<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
