import { FakeOptions, fake } from './core/core';
import { data } from './font-family.json';

/**
 * Generate a random font family.
 *
 * @category code
 *
 * @example
 *
 * randFontFamily()
 *
 * @example
 *
 * randFontFamily({ length: 10 })
 *
 * @example
 *
 * randFontFamily({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFontFamily<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
