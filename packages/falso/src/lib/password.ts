import { FakeOptions, fake } from './core';
import { data } from './password.json';

// TODO add requirements and generate programmatically
export function password<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
