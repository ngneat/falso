import { fake, FakeOptions } from './core/core';
import { randAlphaNumeric } from './alpha-numeric';

const commitShaLen = 40;

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
 * @example
 *
 * randGitCommitSha({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randGitCommitSha<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    let sha = '';

    for (let i = 0; i < commitShaLen; i++) {
      sha += randAlphaNumeric();
    }

    return sha;
  }, options);
}
