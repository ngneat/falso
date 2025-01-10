import { fake, FakeOptions } from './core/core';
import { data } from './motorcycle-manufacturer.json';

/**
 * Generate a random motorcycle manufacturer.
 *
 * @category motorcycle
 *
 * @example
 *
 * randMotorcycleManufacturer()
 *
 * @example
 *
 * randMotorcycleManufacturer({ length: 10 })
 *
 */
export function randMotorcycleManufacturer<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}

/**
 * @deprecated there is a typo in the function name, use randMotorcycleManufacturer;
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
  return randMotorcycleManufacturer(options);
}
