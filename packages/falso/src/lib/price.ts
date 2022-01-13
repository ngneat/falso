import { fake, FakeOptions, getRandomInRange } from './core';
import { RandomNumberOptions } from './random-number';

export interface PriceOptions extends FakeOptions, RandomNumberOptions {}

export function price<Options extends PriceOptions>(options?: Options) {
  return fake(() => getRandomInRange(options), options);
}
