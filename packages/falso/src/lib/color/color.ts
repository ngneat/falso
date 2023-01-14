import { FakeOptions, fake } from '../core/core';
import { data } from './color.json';

/**
 * Generate a random color.
 *
 * @category colors
 *
 * @example
 *
 * randColor()
 *
 * @example
 *
 * randColor({ length: 10 })
 *
 */
export function randColor<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
