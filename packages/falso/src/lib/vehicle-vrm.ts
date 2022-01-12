import { rand } from './core';
import { data } from './vehicle-vrm.i18n.json';

export function vehicleVrm() {
  return rand(data);
}
