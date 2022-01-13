import { FakeOptions, fake } from './core';
import { data } from './rabbit.json';

export function rabbit<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
