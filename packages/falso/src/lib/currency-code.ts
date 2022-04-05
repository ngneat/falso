import { FakeOptions, fake } from './core/core';
import { data } from './currency-code.json';

/**
 * Generate a random currency code.
 *
 * @category finance
 *
 * @example
 *
 * randCurrencyCode()
 *
 * @example
 *
 * randCurrencyCode({ length: 10 })
 *
 * @example
 *
 * randCurrencyCode({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randCurrencyCode<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
