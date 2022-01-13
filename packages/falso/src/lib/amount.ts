import {
  FakeOptions,
  fake,
  getRandomInRange,
  RandomInRangeOptions,
} from './core';

export interface AmountOptions extends FakeOptions {
  min?: number;
  max?: number;
}

export function amount<Options extends AmountOptions>(options?: Options) {
  const config: RandomInRangeOptions = {
    min: options?.min || 0,
    max: options?.max || 10_000,
  };

  return fake(() => getRandomInRange(config), options);
}
