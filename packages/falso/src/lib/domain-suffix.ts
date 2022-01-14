import { FakeOptions, fake } from './core/core';
import { data } from './domain-suffix.json';

/**
 * Generate a random domain-suffix.
 *
 * @category TBD
 *
 * @example
 *
 * domainSuffix()
 *
 * @example
 *
 * domainSuffix({ length: 10 })
 *
 */
export function domainSuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
