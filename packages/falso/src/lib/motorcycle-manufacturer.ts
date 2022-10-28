import { FakeOptions, fake } from './core/core';
import { data } from './motorcycle-manufacturer.json';

/**
 * Generate a random motorcylce manufacturer.
 *
 * @category motorcycle
 *
 * @example
 *
 * randMotorcylceManufacturer()
 *
 * @example
 *
 * randMotorcylceManufacturer({ length: 10 })
 *
 */
export function randMotorcylceManufacturer<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
