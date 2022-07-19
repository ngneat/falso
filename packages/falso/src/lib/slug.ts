import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randWord } from './word';

/**
 * Generate a random slug.
 *
 * @category Internet
 *
 * @example
 *
 * randSlug()
 *
 * @example
 *
 * randSlug({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSlug<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    const numberOfWordsInSlug = getRandomInRange({ min: 3, max: 10 });
    const randomWords = randWord({ length: numberOfWordsInSlug });
    return randomWords.join('-');
  }, options);
}
