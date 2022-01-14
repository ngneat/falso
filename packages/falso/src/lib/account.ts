import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random account.
 *
 * @category TBD
 *
 * @example
 *
 * account()
 *
 * @example
 *
 * account({ length: 10 })
 *
 */
export function account<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange({ max: 99999999 }).toString(), options);
}
