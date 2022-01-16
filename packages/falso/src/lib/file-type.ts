import { FakeOptions, fake } from './core/core';
import { data } from './file-type.json';

/**
 * Generate a random file type.
 *
 * @category system
 *
 * @example
 *
 * randFileType()
 *
 * @example
 *
 * randFileType({ length: 10 })
 *
 */
export function randFileType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
