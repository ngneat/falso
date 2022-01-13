import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core';

export interface RandomFloatOptions extends RandomInRangeOptions, FakeOptions {}

export function randomFloat<Options extends RandomFloatOptions>(
  options?: Options
) {
  return fake(() => getRandomInRange(options), options);
}
