import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random latitude.
 *
 * @category address
 *
 * @example
 *
 * randLatitude()
 *
 * @example
 *
 * randLatitude({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 30.204
 * 34.253
 * -31.506
 */

export function randLatitude<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(
    () =>
      getRandomInRange({
        min: -90,
        max: 90,
        fraction: 3,
      }),
    options
  );
}
