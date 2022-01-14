import { FakeOptions, fake } from './core/core';
import { data } from './database-column.json';

/**
 * Generate a random database-column.
 *
 * @category TBD
 *
 * @example
 *
 * databaseColumn()
 *
 * @example
 *
 * databaseColumn({ length: 10 })
 *
 */
export function databaseColumn<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
