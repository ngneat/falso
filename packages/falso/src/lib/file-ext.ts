import { FakeOptions, fake } from './core/core';
import { data } from './file-ext.json';

/**
 * Generate a random file-ext.
 *
 * @category TBD
 *
 * @example
 *
 * fileExt()
 *
 * @example
 *
 * fileExt({ length: 10 })
 *
 */
export function fileExt<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
