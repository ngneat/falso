import { rand } from './core';
import { data } from './city-suffix.json';

export function citySuffix() {
  return rand(data);
}
