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
 * @example
 *
 * randSlug({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
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
