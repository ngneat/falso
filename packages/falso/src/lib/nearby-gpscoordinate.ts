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
 * @example
 *
 * randNearbyGPSCoordinate({ length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randNearbyGPSCoordinate<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => [randLatitude(), randLongitude()], options, {
    uniqueComparer: checkUnique,
  });
}

const checkUnique: (coordinate: number[], coordinates: number[][]) => boolean =
  (coordinate, coordinates) =>
    coordinates.some((c) => c.join('') === c.join(''));
