import { v4 as uuidv4 } from 'uuid';
import { fake, FakeOptions } from './core/core';

/**
 * Generate a random random-uuid.
 *
 * @category TBD
 *
 * @example
 *
 * randomUuid()
 *
 * @example
 *
 * randomUuid({ length: 10 })
 *
 */
export function randomUuid<Options extends FakeOptions>(options?: Options) {
  return fake(() => uuidv4(), options);
}
