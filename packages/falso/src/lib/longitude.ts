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
 * @example
 *
 * randLongitude({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
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
