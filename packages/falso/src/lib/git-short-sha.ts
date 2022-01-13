import { FakeOptions, fake } from './core';
import { data } from './git-short-sha.json';

export function gitShortSha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
