import { FakeOptions, fake } from './core/core';
import { data } from './database-type.json';

/**
 * Generate a random database type.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseType()
 *
 * @example
 *
 * randDatabaseType({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randDatabaseType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
