import { fake, FakeOptions, getRandomInRange } from './core';

export function account<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange({ max: 99999999 }).toString(), options);
}
