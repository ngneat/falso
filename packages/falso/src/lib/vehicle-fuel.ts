import { rand } from './core';
import { data } from './vehicle-fuel.json';

export function vehicleFuel() {
  return rand(data);
}
