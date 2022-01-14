import { FakeOptions, fake } from './core/core';
import { data } from './database-collation.json';

/**
 * Generate a random database-collation.
 *
 * @category TBD
 *
 * @example
 *
 * databaseCollation()
 *
 * @example
 *
 * databaseCollation({ length: 10 })
 *
 */
export function databaseCollation<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
