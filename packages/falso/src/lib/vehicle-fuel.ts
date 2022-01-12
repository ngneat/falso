import { rand } from './core';
import { data } from './vehicle-fuel.i18n.json';

export function vehicleFuel() {
  return rand(data);
}
