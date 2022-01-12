import { rand } from './core';
import { data } from './vehicle-manufacturer.i18n.json';

export function vehicleManufacturer() {
  return rand(data);
}
