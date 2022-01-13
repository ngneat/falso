import { FakeOptions, fake } from './core';
import { data } from './example-email.json';

export function exampleEmail<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
