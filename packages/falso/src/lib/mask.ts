import { fake, FakeOptions, getRandomInRange } from './core';

export function mask<Options extends FakeOptions>(options?: Options) {
  return fake(
    () => getRandomInRange({ min: 1000, max: 9999 }).toString(),
    options
  );
}
