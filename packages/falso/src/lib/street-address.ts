import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';
import { randStreetName } from './street-name';

/**
 * Generate a random street address.
 *
 * @category address
 *
 * @example
 *
 * randStreetAddress()
 *
 * @example
 *
 * randStreetAddress({ length: 10 })
 *
 * @example
 *
 * randStreetAddress({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randStreetAddress<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () => `${randNumber({ min: 0, max: 1_500 })} ${randStreetName()}`,
    options
  );
}
