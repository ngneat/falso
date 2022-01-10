import { rand } from './core';
import { data } from './vehicle-color.json';

export function vehicleColor() {
  return rand(data);
}
