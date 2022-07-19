import { FakeOptions, fake } from './core/core';
import { data } from './database-collation.json';

/**
 * Generate a random database collation.
 *
 * @category database
 *
 * @example
 *
 * randDatabaseCollation()
 *
 * @example
 *
 * randDatabaseCollation({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'utf8_unicode_ci'
 * 'cp1250_general_ci'
 * 'cp1250_bin'
 */

export function randDatabaseCollation<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
