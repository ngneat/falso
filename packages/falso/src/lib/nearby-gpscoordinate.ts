import { fake, FakeOptions } from './core/core';
import { randLatitude } from './latitude';
import { randLongitude } from './longitude';

/**
 * Generate a random GPS coordinate.
 *
 * @category address
 *
 * @example
 *
 * randNearbyGPSCoordinate()
 *
 * @example
 *
 * randNearbyGPSCoordinate({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randNearbyGPSCoordinate<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => [randLatitude(), randLongitude()], options);
}
