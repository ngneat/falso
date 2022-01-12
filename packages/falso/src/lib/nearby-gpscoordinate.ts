import { rand } from './core';
import { data } from './nearby-gpscoordinate.json';

export function nearbyGPSCoordinate() {
  return rand(data);
}
