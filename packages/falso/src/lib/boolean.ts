import { fake, FakeOptions, randElement } from './core/core';

/**
 * Generate a random boolean.
 *
 * @category general
 *
 * @example
 *
 * randBoolean()
 *
 * @example
 *
 * randBoolean({ length: 10 })
 *
 * @example
 *
 * randBoolean({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randBoolean<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randElement([true, false]), options);
}
