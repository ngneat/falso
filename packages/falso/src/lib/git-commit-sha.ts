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
 * @example
 * 37386eb1efe69896483cc47b67c7b7246477429d
 * ead3788c8d5e9599931cc2c6c48428dc72e5674b
 * 1584b4433ec1dae2eaf9aeb47888cef4b5be7a94
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
