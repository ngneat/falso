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
 */
export function randVerb<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
