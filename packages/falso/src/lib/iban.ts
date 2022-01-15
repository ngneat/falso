import { FakeOptions, fake } from './core/core';
import { data } from './iban.json';

/**
 * Generate a random ibn.
 *
 * @category Finance
 *
 * @example
 *
 * randIban()
 *
 * @example
 *
 * randIban({ length: 10 })
 *
 */
export function randIban<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
