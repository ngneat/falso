import { FakeOptions, fake } from './core/core';
import { data } from './database-type.json';

/**
 * Generate a random database type.
 *
 * @category Database
 *
 * @example
 *
 * randDatabaseType()
 *
 * @example
 *
 * randDatabaseType({ length: 10 })
 *
 */
export function randDatabaseType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
