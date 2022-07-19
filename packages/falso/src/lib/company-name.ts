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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Kautzer, Macejkovic and Fisher'
 * 'Greenholt - Mosciski'
 * 'Marquardt - Runolfsdottir'
 */

export function randCompanyName<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
