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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 0cef8769-2201-4319-be24-3472f762b746
 * 87901759-ddf8-4d83-b26a-b384c9f44b4b
 * e781b478-d381-45ad-b332-cfd57e5d4f60
 */

export function randUuid<Options extends FakeOptions = never>(
  options?: Options
) {
  const v4options: V4Options = {
    random: randNumber({ min: 0, max: 255, length: 16 }),
  };

  return fake(() => uuidv4(v4options), options);
}
