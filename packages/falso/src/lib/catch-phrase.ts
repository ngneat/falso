import { FakeOptions, fake } from './core/core';
import { data } from './catch-phrase.json';

/**
 * Generate a random catch phrase.
 *
 * @category text
 *
 * @example
 *
 * randCatchPhrase()
 *
 * @example
 *
 * randCatchPhrase({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Persevering encompassing middleware'
 * 'Multi-layered zero administration system engine'
 * 'Digitized attitude-oriented implementation'
 */

export function randCatchPhrase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
