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
 */
export function randFilePath<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
