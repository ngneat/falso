import { FakeOptions, fake } from './core/core';
import { data } from './verb.json';

/**
 * Generate a random verb.
 *
 * @category text
 *
 * @example
 *
 * randVerb()
 *
 * @example
 *
 * randVerb({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'bypass'
 * 'index'
 * 'transmit'
 */

export function randVerb<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
