import { rand } from './core';
import { data } from './city-name.i18n.json';

export function cityName() {
  return rand(data);
}
