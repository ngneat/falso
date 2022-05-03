import { FakeOptions, fake } from './core/core';
import { randHexaDecimal } from './hexa-decimal';

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
  return fake(() => {
    let sha = '';

    for (let i = 0; i < commitShortShaLen; i++) {
      sha += randHexaDecimal();
    }

    return sha;
  }, options);
}
