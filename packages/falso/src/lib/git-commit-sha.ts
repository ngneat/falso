import { fake, FakeOptions } from './core/core';
import { randHexaDecimal } from './hexa-decimal';

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
 *
 * @automaticallyGeneratedExamples
 */

export function randGitCommitSha<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    let sha = '';

    for (let i = 0; i < commitShaLen; i++) {
      sha += randHexaDecimal();
    }

    return sha;
  }, options);
}
