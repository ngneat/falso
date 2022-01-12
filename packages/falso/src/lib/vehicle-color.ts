import { rand } from './core';
import { data } from './vehicle-color.i18n.json';

export function vehicleColor() {
  return rand(data);
}
