import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomFloatOptions extends RandomInRangeOptions, FakeOptions {}

/**
 * Generate a random random float.
 *
 * @category general
 *
 * @example
 *
 * randFloat()
 *
 * @example
 *
 * randFloat({ length: 10 })
 *
 */
export function randFloat<Options extends RandomFloatOptions = never>(
  options?: Options
) {
  const o = { ...options, fraction: options?.fraction ?? 2 };
  return fake(() => getRandomInRange(o), options);
}
