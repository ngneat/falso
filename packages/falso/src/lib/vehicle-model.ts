import { rand } from './core';
import { data } from './vehicle-model.i18n.json';

export function vehicleModel() {
  return rand(data);
}
