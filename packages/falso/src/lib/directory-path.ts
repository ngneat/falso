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
 * @example
 *
 * randDirectoryPath({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randDirectoryPath<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
