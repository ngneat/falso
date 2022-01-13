import { FakeOptions, fake } from './core';
import { data } from './first-name.json';

export function firstName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
