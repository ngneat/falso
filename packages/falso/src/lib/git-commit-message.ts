import { FakeOptions, fake } from './core/core';
import { data } from './git-commit-message.json';

// TODO - generate programmatically
export function gitCommitMessage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
