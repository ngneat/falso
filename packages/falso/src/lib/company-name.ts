import { FakeOptions, fake } from './core/core';
import { data } from './company-name.json';

/**
 * Generate a random company name.
 *
 * @category Company
 *
 * @example
 *
 * randCompanyName()
 *
 * @example
 *
 * randCompanyName({ length: 10 })
 *
 * @example
 *
 * randCompanyName({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randCompanyName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
