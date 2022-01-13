import { FakeOptions, fake } from './core';
import { data } from './direction.json';

export function direction<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
