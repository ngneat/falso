import { FakeOptions, fake } from './core/core';
import { data } from './git-short-sha.json';

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
export function randGitShortSha<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
