import { FakeOptions, fake } from './core/core';
import { data } from './clothing-size.json';

/**
 * Generate a random clothing size.
 *
 * @category Commerce
 *
 * @example
 *
 * randClothingSize()
 *
 * @example
 *
 * randClothingSize({ length: 10 })
 *
 * @example
 *
 * randClothingSize({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randClothingSize<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
