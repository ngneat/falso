import { rand } from './core';
import { data } from './vehicle-manufacturer.json';

export function vehicleManufacturer() {
  return rand(data);
}
