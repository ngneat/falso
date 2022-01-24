import { FakeOptions, fake } from './core/core';
import { randNumber } from './number';

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
export function randRoutingNumber<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(() => randNumber({ min: 10_000_000, max: 99_999_999 }), options);
}
