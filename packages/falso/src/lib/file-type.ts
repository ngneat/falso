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
 * @example
 *
 * randFileType({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFileType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
