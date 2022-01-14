import { FakeOptions, fake } from './core';
import { data } from './full-name.json';

// TODO - generate programmatically using firstName lastName
export function fullName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
