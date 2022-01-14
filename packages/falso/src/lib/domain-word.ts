import { FakeOptions, fake } from './core/core';
import { data } from './domain-word.json';

/**
 * Generate a random domain-word.
 *
 * @category TBD
 *
 * @example
 *
 * domainWord()
 *
 * @example
 *
 * domainWord({ length: 10 })
 *
 */
export function domainWord<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
