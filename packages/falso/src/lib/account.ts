import { fake, FakeOptions, getRandomInRange } from './core/core';

/**
 * Generate a random account.
 *
 * @category finance
 *
 * @example
 *
 * randAccount()
 *
 * @example
 *
 * randAccount({ length: 10 })
 *
 */
export function randAccount<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange({ max: 99999999 }).toString(), options);
}
