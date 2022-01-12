import { rand } from './core';
import { data } from './vehicle.i18n.json';

export function vehicle() {
  return rand(data);
}
