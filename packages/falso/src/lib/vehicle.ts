import { rand } from './core';
import { data } from './vehicle.json';

export function vehicle() {
  return rand(data);
}
