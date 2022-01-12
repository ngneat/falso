import { rand } from './core';
import { data } from './city-name.json';

export function cityName() {
  return rand(data);
}
