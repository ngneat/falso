import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random datatype-number.
 *
 * @category TBD
 *
 * @example
 *
 * datatypeNumber()
 *
 * @example
 *
 * datatypeNumber({ length: 10 })
 *
 */
export function datatypeNumber<Options extends FakeOptions>(options?: Options) {
  return fake(() => getRandomInRange(), options);
}
