import { fake, FakeOptions, getRandomInRange } from './core/core';

export function creditCardCVV<Options extends FakeOptions>(options?: Options) {
  return fake(
    () => getRandomInRange({ min: 100, max: 999 }).toString(),
    options
  );
}
