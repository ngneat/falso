import { FakeOptions, fake } from './core/core';
import { data } from './database-engine.json';

/**
 * Generate a random database engine.
 *
 * @category Database
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
export function randDatabaseEngine<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
