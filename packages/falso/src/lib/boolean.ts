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
 *
 * @automaticallyGeneratedExamples
 */

export function randBoolean<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => randElement([true, false]), options);
}
