import { rand } from './core';
import { data } from './vehicle-vrm.json';

export function vehicleVrm() {
  return rand(data);
}
