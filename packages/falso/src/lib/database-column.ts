import { FakeOptions, fake } from './core/core';
import { data } from './database-column.json';

/**
 * Generate a random database column.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseColumn()
 *
 * @example
 *
 * randDatabaseColumn({ length: 10 })
 *
 * @example
 *
 * randDatabaseColumn({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randDatabaseColumn<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
