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
 * randFloat({ length: 10 })
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 1 }) // 12.5
 *
 * @example
 *
 * randFloat({ min: 10, max: 20, fraction: 2 }) // 12.52
 *
 * @automaticallyGeneratedExamples
 * @example
 * 3364.7
 * 6531.59
 * 842.33
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
