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
 * @example
 * -35.38,152.673
 * 32.35,-15.859
 * -32.507,-145.21
 */

export function randNearbyGPSCoordinate<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => [randLatitude(), randLongitude()], options);
}
