import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random longitude.
 *
 * @category TBD
 *
 * @example
 *
 * longitude()
 *
 * @example
 *
 * longitude({ length: 10 })
 *
 */
export function longitude<Options extends FakeOptions>(options?: Options) {
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
