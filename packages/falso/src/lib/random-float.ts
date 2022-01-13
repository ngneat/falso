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
  const o = { ...options, fraction: options?.fraction ?? 2 };
  return fake(() => getRandomInRange(o), options);
}
