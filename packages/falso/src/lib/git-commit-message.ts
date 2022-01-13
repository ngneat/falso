import { FakeOptions, fake } from './core';
import { data } from './git-commit-message.json';

export function gitCommitMessage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
