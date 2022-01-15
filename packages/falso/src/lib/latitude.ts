import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random latitude.
 *
 * @category TBD
 *
 * @example
 *
 * randLatitude()
 *
 * @example
 *
 * randLatitude({ length: 10 })
 *
 */
export function randLatitude<Options extends FakeOptions>(options?: Options) {
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
