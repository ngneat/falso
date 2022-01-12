import { rand } from './core';
import { data } from './zip-code.json';

export function zipCode() {
  return rand(data);
}
