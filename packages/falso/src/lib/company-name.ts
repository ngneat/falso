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
 */
export function randCompanyName<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
