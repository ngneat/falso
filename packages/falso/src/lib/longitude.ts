import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random longitude.
 *
 * @category address
 *
 * @example
 *
 * randLongitude()
 *
 * @example
 *
 * randLongitude({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 33.825
 * 166.81
 * -89.624
 */

export function randLongitude<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () =>
      getRandomInRange({
        min: -180,
        max: 180,
        fraction: 3,
      }),
    options
  );
}
