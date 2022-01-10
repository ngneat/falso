import { rand } from './core';
import { data } from './country-code.json';

export function countryCode() {
  return rand(data);
}
