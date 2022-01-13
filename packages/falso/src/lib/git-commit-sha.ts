import { FakeOptions, fake } from './core';
import { data } from './git-commit-sha.json';

export function gitCommitSha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
