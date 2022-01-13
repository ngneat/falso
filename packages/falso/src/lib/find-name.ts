import { FakeOptions, fake } from './core';
import { data } from './find-name.json';
// TODO rename?
export function findName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
