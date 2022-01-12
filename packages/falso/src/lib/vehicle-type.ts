import { rand } from './core';
import { data } from './vehicle-type.json';

export function vehicleType() {
  return rand(data);
}
