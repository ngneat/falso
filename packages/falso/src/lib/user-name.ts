import { FakeOptions, fake } from './core/core';
import { data } from './user-name.json';

// TODO - generate programmatically
export function randUserName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
