import {
  FakeOptions,
  fake,
  getRandomInRange,
  RandomInRangeOptions,
} from './core';

export interface RandomNumberOptions extends FakeOptions {
  min?: number;
  max?: number;
}

export function randomNumber<Options extends RandomNumberOptions>(
  options?: Options
) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 999_999,
    fraction: 0,
  };

  return fake(() => getRandomInRange(config), options);
}
