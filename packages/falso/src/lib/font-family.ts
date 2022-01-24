import { FakeOptions, fake } from './core/core';
import { data } from './font-family.json';

/**
 * Generate a random font family.
 *
 * @category Code
 *
 * @example
 *
 * randFontFamily()
 *
 * @example
 *
 * randFontFamily({ length: 10 })
 *
 */
export function randFontFamily<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
