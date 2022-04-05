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
 * randTransactionType({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randTransactionType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
