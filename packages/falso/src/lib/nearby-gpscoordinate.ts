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
 * randNearbyGPSCoordinate({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randNearbyGPSCoordinate<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => [randLatitude(), randLongitude()], options, {
    uniqueComparer: checkUnique,
  });
}

export function checkUnique(
  coordinate: number[],
  coordinates: number[][]
): boolean {
  return !coordinates.some((c) => c.join('') === coordinate.join(''));
}
