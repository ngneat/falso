import { FakeOptions, fake } from './core/core';
import { data } from './git-commit-sha.json';

/**
 * Generate a random git sha.
 *
 * @category git
 *
 * @example
 *
 * randGitCommitSha()
 *
 * @example
 *
 * randGitCommitSha({ length: 10 })
 *
 */
export function randGitCommitSha<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
