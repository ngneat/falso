import { rand } from './core';
import { data } from './vehicle-model.json';

export function vehicleModel() {
  return rand(data);
}
