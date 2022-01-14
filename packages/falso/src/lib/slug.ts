import { FakeOptions, fake } from './core';
import { data } from './slug.json';

// TODO - generate programmatically
export function slug<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
