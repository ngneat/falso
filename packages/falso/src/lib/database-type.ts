import { FakeOptions, fake } from './core/core';
import { data } from './database-type.json';

/**
 * Generate a random database-type.
 *
 * @category TBD
 *
 * @example
 *
 * databaseType()
 *
 * @example
 *
 * databaseType({ length: 10 })
 *
 */
export function databaseType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
