import { FakeOptions, fake } from './core/core';
import { data } from './routing-number.json';

/**
 * Generate a random routing number.
 *
 * @category finance
 *
 * @example
 *
 * randRoutingNumber()
 *
 * @example
 *
 * randRoutingNumber({ length: 10 })
 *
 */
export function randRoutingNumber<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
