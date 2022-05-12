import { FakeOptions, fake } from './core/core';
import { data } from './mime-type.json';

/**
 * Generate a random mime type.
 *
 * @category system
 *
 * @example
 *
 * randMimeType()
 *
 * @example
 *
 * randMimeType({ length: 10 })
 *
 * @example
 *
 * randMimeType({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randMimeType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
