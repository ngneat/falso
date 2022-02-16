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
 */
export function randDatabaseEngine<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
