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
 * @example
 *
 * randTransactionType({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randTransactionType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
