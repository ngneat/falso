import { v4 as uuidv4, V4Options } from 'uuid';
import { fake, FakeOptions } from './core/core';
import { randNumber } from './number';

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
 * randUuid({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randUuid<Options extends FakeOptions = never>(
  options?: Options
) {
  const v4options: V4Options = {
    random: randNumber({ min: 0, max: 255, length: 16 }),
  };

  return fake(() => uuidv4(v4options), options);
}
