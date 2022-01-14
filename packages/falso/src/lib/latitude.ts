import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random latitude.
 *
 * @category TBD
 *
 * @example
 *
 * latitude()
 *
 * @example
 *
 * latitude({ length: 10 })
 *
 */
export function latitude<Options extends FakeOptions>(options?: Options) {
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
