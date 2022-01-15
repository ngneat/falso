import { FakeOptions, fake } from './core/core';
import { data } from './transaction-type.json';

/**
 * Generate a random transaction type.
 *
 * @category Finance
 *
 * @example
 *
 * randTransactionType()
 *
 * @example
 *
 * randTransactionType({ length: 10 })
 *
 */
export function randTransactionType<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
