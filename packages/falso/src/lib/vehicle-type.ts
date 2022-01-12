import { rand } from './core';
import { data } from './vehicle-type.i18n.json';

export function vehicleType() {
  return rand(data);
}
