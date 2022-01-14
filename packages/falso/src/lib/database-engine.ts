import { FakeOptions, fake } from './core/core';
import { data } from './database-engine.json';

/**
 * Generate a random database-engine.
 *
 * @category TBD
 *
 * @example
 *
 * databaseEngine()
 *
 * @example
 *
 * databaseEngine({ length: 10 })
 *
 */
export function databaseEngine<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
