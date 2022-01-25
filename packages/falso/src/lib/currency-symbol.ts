import { FakeOptions, fake } from './core/core';
import { data } from './currency-symbol.json';

/**
 * Generate a random currency symbol.
 *
 * @category Finance
 *
 * @example
 *
 * randCurrencySymbol()
 *
 * @example
 *
 * randCurrencySymbol({ length: 10 })
 *
 */
export function randCurrencySymbol<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
