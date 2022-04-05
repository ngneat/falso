import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

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
 * randNumber({ min: 10, max: 1000 }) // default is 'min': 0, 'max': 999_999
 *
 * @example
 *
 * randNumber({ min: 1000, max: 100000, precision: 1000 }) // 67000
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 100 }) // 1200
 *
 * @example
 *
 * randNumber({ min: 1000, max: 2000, precision: 10 }) // 1250
 *
 * @example
 *
 * randNumber({ length: 10 })
 *
 * @example
 *
 * randNumber({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randNumber<Options extends RandomNumberOptions = never>(
  options?: Options
) {
  const o: RandomNumberOptions = {
    min: options?.min || 0,
    max: options?.max || 999_999,
    precision: options?.precision,
  };

  return fake(() => {
    const num = getRandomInRange(o);
    if (o.precision !== undefined) {
      return Math.floor(num / o.precision) * o.precision;
    }
    return num;
  }, options);
}
