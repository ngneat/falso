import {
  fake,
  FakeOptions,
  getRandomInRange,
  RandomInRangeOptions,
} from './core';

type AmountOptions = FakeOptions & RandomInRangeOptions;

export function amount<Options extends AmountOptions>(options?: Options) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 10_000,
    fraction: options?.fraction ?? 2,
  };

  return fake(() => getRandomInRange(config), options);
}
