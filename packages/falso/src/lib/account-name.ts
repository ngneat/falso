import { FakeOptions, fake } from './core/core';
import { data } from './account-name.json';

/**
 * Generate a random account-name.
 *
 * @category TBD
 *
 * @example
 *
 * accountName()
 *
 * @example
 *
 * accountName({ length: 10 })
 *
 */
export function accountName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
