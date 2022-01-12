import { rand } from './core';
import { data } from './nearby-gpscoordinate.i18n.json';

export function nearbyGPSCoordinate() {
  return rand(data);
}
