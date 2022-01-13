import { FakeOptions, fake } from './core';
import { data } from './last-name.json';

export function lastName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
