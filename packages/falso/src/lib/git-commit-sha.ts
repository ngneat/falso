import { FakeOptions, fake } from './core';
import { data } from './git-commit-sha.json';

// TODO - generate programmatically
export function gitCommitSha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
