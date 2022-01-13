import { FakeOptions, fake } from './core';
import { data } from './department.json';

export function department<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
