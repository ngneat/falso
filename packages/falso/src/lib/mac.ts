import { FakeOptions, fake } from './core/core';
import { data } from './mac.json';

// TODO - generate programmatically
export function randMac<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
