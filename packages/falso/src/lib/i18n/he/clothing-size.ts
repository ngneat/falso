import { FakeOptions, fake } from '../../core/core';
import { data } from './clothing-size.i18n.json';

/**
 * Generate a random clothing size.
 *
 * @category fashion
 *
 * @example
 *
 * randClothingSize()
 *
 * @example
 *
 * randClothingSize({ length: 10 })
 *
 */
export function randClothingSize<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
