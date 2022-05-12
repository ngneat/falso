import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomFloatOptions extends RandomInRangeOptions, FakeOptions {}

/**
 * Generate a random float.
 *
 * @category general, math
 *
 * @example
 *
 * randFloat()
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 1 }) // 12.5
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 2 }) // 12.52
 *
 * @example
 *
 * randFloat({ length: 10 })
 *
 * @example
 *
 * randFloat({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randFloat<Options extends RandomFloatOptions = never>(
  options?: Options
) {
  const o: RandomFloatOptions = {
    ...options,
    fraction: options?.fraction ?? 2,
  };
  return fake(() => getRandomInRange(o), options);
}
