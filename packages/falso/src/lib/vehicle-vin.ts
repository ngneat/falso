import { rand } from './core';
import { data } from './vehicle-vin.json';

export function vehicleVin() {
  return rand(data);
}
