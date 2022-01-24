import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { randWord } from './word';

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
export function randGitCommitMessage<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(() => {
    const words = [];

    for (let i = 0; i < randNumber({ min: 2, max: 5 }); i++) {
      words.push(randWord());
    }

    return words.join(' ');
  }, options);
}
