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
 *
 * @automaticallyGeneratedExamples
 */

export function randTransactionType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
