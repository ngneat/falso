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
 */
export function randAccessory<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
