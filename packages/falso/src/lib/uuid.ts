import { v4 as uuidv4 } from 'uuid';
import { fake, FakeOptions } from './core/core';

/**
 * Generate a random uuid.
 *
 * @category general, database
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
export function randUuid<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => uuidv4(), options);
}
