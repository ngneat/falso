import { FakeOptions, fake } from './core/core';
import { data } from './company-suffix.json';

/**
 * Generate a random company-suffix.
 *
 * @category TBD
 *
 * @example
 *
 * companySuffix()
 *
 * @example
 *
 * companySuffix({ length: 10 })
 *
 */
export function companySuffix<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
