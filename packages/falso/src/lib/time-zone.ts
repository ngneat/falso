import { FakeOptions, fake } from './core/core';
import { data } from './time-zone.json';

/**
 * Generate a random time zone.
 *
 * @category address
 *
 * @example
 *
 * randTimeZone()
 *
 * @example
 *
 * randTimeZone({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'America/Lima'
 * 'America/Juneau'
 * 'Pacific/Auckland'
 */

export function randTimeZone<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
