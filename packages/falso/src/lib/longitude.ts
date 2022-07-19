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
