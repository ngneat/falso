import { FakeOptions, fake } from './core/core';
import { data } from './password.json';

// TODO add requirements and generate programmatically
export function randPassword<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
