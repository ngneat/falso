import { FakeOptions, fake } from './core';
import { data } from './git-commit-entry.json';

// TODO - generate programmatically
export function gitCommitEntry<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
