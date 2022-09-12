import {
  fake,
  FakeOptions,
  getRandomInRange,
  markRequired,
  RandomInRangeOptions,
} from './core/core';
import { isNil } from './core/validators';

export interface RandomNumberOptions extends RandomInRangeOptions, FakeOptions {
  precision?: number;
}

/**
 * Generate a random number.
 *
 * @category general, math
 *
 * @example
 *
 * randNumber()
 *
 * @example
 *
 * randNumber({ length: 10 })
 *
 * @example
 *
 * randNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999
 *
 * @example
 *
 * randNumber({ min: 0.1, max: 1, fraction: 2 }) // 0.37
 *
 * @example
 *
 * randNumber({ min: 1000, max: 100000, precision: 1000 }) // 67_000
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 100 }) // 1_200
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 10 }) // 1_250
 *
 * @example
 *
 * randNumber({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randNumber<Options extends RandomNumberOptions = never>(
  options?: Options
) {
  const normalized: markRequired<RandomNumberOptions, 'min' | 'max'> = {
    min: isNil(options?.min) ? 0 : options!.min,
    max: isNil(options?.max) ? 999_999 : options!.max,
    precision: options?.precision,
    fraction: options?.fraction,
  };

  return fake(() => {
    if (normalized.min === normalized.max) {
      return normalized.min;
    }

    const num = getRandomInRange(normalized);
    if (normalized.precision !== undefined) {
      return Math.floor(num / normalized.precision) * normalized.precision;
    }
    return num;
  }, options);
}
