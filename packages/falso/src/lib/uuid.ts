import { v4 as uuidv4 } from 'uuid';
import { fake, FakeOptions } from './core/core';

/**
 * Generate a random random uuid.
 *
 * @category general
 *
 * @example
 *
 * randUuid()
 *
 * @example
 *
 * randUuid({ length: 10 })
 *
 */
export function randUuid<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(() => uuidv4(), options);
}
