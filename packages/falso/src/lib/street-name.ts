import { rand } from './core';
import { data } from './street-name.json';

export function streetName() {
  return rand(data);
}
