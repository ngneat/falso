import { FakeOptions, fake } from './core';
import { data } from './password.json';

// TODO add requirements
export function password<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
