import { FakeOptions, fake } from './core/core';
import { data } from './git-commit-message.json';

/**
 * Generate a random git message.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitMessage()
 *
 * @example
 *
 * randGitCommitMessage({ length: 10 })
 *
 */
export function randGitCommitMessage<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
