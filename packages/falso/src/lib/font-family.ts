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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Inter'
 * 'DM Sans'
 * 'Space Mono'
 */

export function randFontFamily<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
