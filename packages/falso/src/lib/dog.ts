import { FakeOptions, fake } from './core';
import { data } from './dog.json';

export function dog<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
