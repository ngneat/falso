import { FakeOptions, fake } from './core/core';
import { data } from './company-name.json';

/**
 * Generate a random company-name.
 *
 * @category TBD
 *
 * @example
 *
 * companyName()
 *
 * @example
 *
 * companyName({ length: 10 })
 *
 */
export function companyName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
