import { FakeOptions, fake } from './core/core';
import { data } from './accessory.json';

/**
 * Generate a random accessory.
 *
 * @category Commerce
 *
 * @example
 *
 * randAccessory()
 *
 * @example
 *
 * randAccessory({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Sunglasses'
 * 'Apron'
 * 'Necklace'
 */

export function randAccessory<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
