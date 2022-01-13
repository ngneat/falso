import { FakeOptions, fake } from './core';
import { data } from './git-branch.json';

export function gitBranch<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
