import {
  FakeOptions,
  fake,
  getRandomInRange,
  RandomInRangeOptions,
} from './core/core';

export interface RandomNumberOptions extends FakeOptions {
  min?: number;
  max?: number;
}

/**
 * Generate a random random number.
 *
 * @category general
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
 * randNumber({ min: 10, max: 1000 })
 *
 */
export function randNumber<Options extends RandomNumberOptions>(
  options?: Options
) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 999_999,
  };

  return fake(() => getRandomInRange(config), options);
}
