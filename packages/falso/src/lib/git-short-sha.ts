import { FakeOptions, fake } from './core';
import { data } from './git-short-sha.json';

// TODO - generate programmatically
export function gitShortSha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
