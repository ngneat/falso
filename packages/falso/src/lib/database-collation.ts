import { FakeOptions, fake } from './core/core';
import { data } from './database-collation.json';

/**
 * Generate a random database collation.
 *
 * @category Database
 *
 * @example
 *
 * randDatabaseCollation()
 *
 * @example
 *
 * randDatabaseCollation({ length: 10 })
 *
 */
export function randDatabaseCollation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
