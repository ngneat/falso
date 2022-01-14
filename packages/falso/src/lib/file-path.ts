import { FakeOptions, fake } from './core/core';
import { data } from './file-path.json';

/**
 * Generate a random file-path.
 *
 * @category TBD
 *
 * @example
 *
 * filePath()
 *
 * @example
 *
 * filePath({ length: 10 })
 *
 */
export function filePath<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
