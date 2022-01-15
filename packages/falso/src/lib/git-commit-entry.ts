import { FakeOptions, fake } from './core/core';
import { data } from './git-commit-entry.json';

/**
 * Generate a random git commit.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitEntry()
 *
 * @example
 *
 * randGitCommitEntry({ length: 10 })
 *
 */
export function randGitCommitEntry<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
