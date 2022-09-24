import { FakeOptions, fake } from './core/core';
import { data } from './database-engine.json';

/**
 * Generate a random database engine.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseEngine()
 *
 * @example
 *
 * randDatabaseEngine({ length: 10 })
 *
 * @example
 *
 * randDatabaseEngine({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randDatabaseEngine<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
