import { FakeOptions, fake } from './core';
import { data } from './words.json';

// TODO - generate programmatically and add number option
export function words<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
