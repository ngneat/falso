import { FakeOptions, fake } from './core/core';
import { data } from './file-ext.json';

/**
 * Generate a random file ext.
 *
 * @category system
 *
 * @example
 *
 * randFileExt()
 *
 * @example
 *
 * randFileExt({ length: 10 })
 *
 * @example
 *
 * randFileExt({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFileExt<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
