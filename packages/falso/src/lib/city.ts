import { rand } from './core';
import { data } from './city.json';

export function city() {
  return rand(data);
}
