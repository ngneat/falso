import { fake, FakeOptions } from './core/core';
import { gitShaGenerator } from './git-commit-sha';

const commitShortShaLen = 7;

/**
 * Generate a random git short sha.
 *
 * @category git
 *
 * @example
 *
 * randGitShortSha()
 *
 * @example
 *
 * randGitShortSha({ length: 10 })
 *
 */
export function randGitShortSha<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(gitShaGenerator(commitShortShaLen), options);
}
