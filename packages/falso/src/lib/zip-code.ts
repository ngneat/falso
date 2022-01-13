import { FakeOptions, fake } from './core';
import { data } from './zip-code.json';

// TODO support state
export function zipCode<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
