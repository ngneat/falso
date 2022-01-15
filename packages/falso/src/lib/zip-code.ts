import { FakeOptions, fake } from './core/core';
import { data } from './zip-code.json';

// TODO support state and generate programmatically
export function randZipCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
