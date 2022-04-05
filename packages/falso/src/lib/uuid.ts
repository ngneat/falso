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
 * @example
 *
 * randUuid({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randUuid<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => uuidv4(), options);
}
