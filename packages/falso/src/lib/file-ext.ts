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
 */
export function randFileExt<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
