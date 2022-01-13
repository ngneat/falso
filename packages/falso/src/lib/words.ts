import { FakeOptions, fake } from './core';
import { data } from './words.json';

export function words<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
