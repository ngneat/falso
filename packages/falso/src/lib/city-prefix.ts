import { rand } from './core';
import { data } from './city-prefix.json';

export function cityPrefix() {
  return rand(data);
}
