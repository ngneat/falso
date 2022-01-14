import { FakeOptions, fake } from './core/core';
import { data } from './mime-type.json';

/**
 * Generate a random mime-type.
 *
 * @category TBD
 *
 * @example
 *
 * mimeType()
 *
 * @example
 *
 * mimeType({ length: 10 })
 *
 */
export function mimeType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
