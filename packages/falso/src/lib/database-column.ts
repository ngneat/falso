import { FakeOptions, fake } from './core/core';
import { data } from './database-column.json';

/**
 * Generate a random database column.
 *
 * @category Database
 *
 * @example
 *
 * randDatabaseColumn()
 *
 * @example
 *
 * randDatabaseColumn({ length: 10 })
 *
 */
export function randDatabaseColumn<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
