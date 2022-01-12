import { rand } from './core';
import { data } from './country.json';

export function country() {
  return rand(data);
}
