import { FakeOptions, fake } from './core/core';
import { data } from './file-path.json';

/**
 * Generate a random file path.
 *
 * @category system
 *
 * @example
 *
 * randFilePath()
 *
 * @example
 *
 * randFilePath({ length: 10 })
 *
 * @example
 *
 * randFilePath({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randFilePath<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
