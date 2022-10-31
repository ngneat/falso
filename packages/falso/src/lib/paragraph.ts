import { FakeOptions, fake } from './core/core';
import { data } from './paragraph.json';

/**
 * Generate a random paragraph.
 *
 * @category text
 *
 * @example
 *
 * randParagraph()
 *
 * @example
 *
 * randParagraph({ length: 10 })
 *
 */
export function randParagraph<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
