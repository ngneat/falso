import { FakeOptions, fake } from './core';
import { data } from './nearby-gpscoordinate.json';

// TODO - generate programmatically
export function nearbyGPSCoordinate<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
