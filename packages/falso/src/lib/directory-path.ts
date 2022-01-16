import { FakeOptions, fake } from './core/core';
import { data } from './directory-path.json';

/**
 * Generate a random directory path.
 *
 * @category system
 *
 * @example
 *
 * randDirectoryPath()
 *
 * @example
 *
 * randDirectoryPath({ length: 10 })
 *
 */
export function randDirectoryPath<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
