import { rand } from './core';
import { data } from './secondary-address.json';

export function secondaryAddress() {
  return rand(data);
}
