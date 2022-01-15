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
 * Generate a random random-number.
 *
 * @category TBD
 *
 * @example
 *
 * randomNumber()
 *
 * @example
 *
 * randomNumber({ length: 10 })
 *
 */
export function randomNumber<Options extends RandomNumberOptions>(
  options?: Options
) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 999_999,
  };

  return fake(() => getRandomInRange(config), options);
}
