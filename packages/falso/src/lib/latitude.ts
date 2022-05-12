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
 * @example
 *
 * randLatitude({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
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
