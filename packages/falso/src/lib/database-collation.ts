import { FakeOptions, fake } from './core/core';
import { data } from './database-collation.json';

/**
 * Generate a random database collation.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseCollation()
 *
 * @example
 *
 * randDatabaseCollation({ length: 10 })
 *
 * @example
 *
 * randDatabaseCollation({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randDatabaseCollation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
