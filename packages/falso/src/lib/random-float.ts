import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomFloatOptions extends RandomInRangeOptions, FakeOptions {}

/**
 * Generate a random random-float.
 *
 * @category TBD
 *
 * @example
 *
 * randomFloat()
 *
 * @example
 *
 * randomFloat({ length: 10 })
 *
 */
export function randomFloat<Options extends RandomFloatOptions>(
  options?: Options
) {
  const o = { ...options, fraction: options?.fraction ?? 2 };
  return fake(() => getRandomInRange(o), options);
}
