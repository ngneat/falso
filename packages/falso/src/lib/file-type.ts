import { FakeOptions, fake } from './core/core';
import { data } from './file-type.json';

/**
 * Generate a random file-type.
 *
 * @category TBD
 *
 * @example
 *
 * fileType()
 *
 * @example
 *
 * fileType({ length: 10 })
 *
 */
export function fileType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
