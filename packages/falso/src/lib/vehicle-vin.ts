import { rand } from './core';
import { data } from './vehicle-vin.i18n.json';

export function vehicleVin() {
  return rand(data);
}
