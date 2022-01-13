import { FakeOptions, fake } from './core';
import { data } from './slug.json';

export function slug<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
