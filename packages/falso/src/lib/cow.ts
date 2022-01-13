import { FakeOptions, fake } from './core';
import { data } from './cow.json';

export function cow<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
