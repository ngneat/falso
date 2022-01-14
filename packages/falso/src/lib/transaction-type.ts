import { FakeOptions, fake } from './core/core';
import { data } from './transaction-type.json';

/**
 * Generate a random transaction-type.
 *
 * @category TBD
 *
 * @example
 *
 * transactionType()
 *
 * @example
 *
 * transactionType({ length: 10 })
 *
 */
export function transactionType<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
