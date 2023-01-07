import { fake, FakeOptions } from './core/core';
import { randHexaDecimal } from './hexa-decimal';

export function gitShaGenerator(len: number) {
  return () => {
    let sha = '';

    for (let i = 0; i < len; i++) {
      sha += randHexaDecimal();
    }

    return sha;
  };
}

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
 */
export function randGitCommitSha<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(gitShaGenerator(commitShaLen), options);
}
