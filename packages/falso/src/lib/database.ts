import { FakeOptions, fake } from './core/core';
import { data } from './database.json';

/**
 * Generate a random database.
 *
 * @category database
 *
 * @example
 *
 * randDatabase()
 *
 * @example
 *
 * randDatabase({ length: 10 })
 *
 */
export function randDatabase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
