import { rand } from './core';
import { data } from './city-prefix.i18n.json';

export function cityPrefix() {
  return rand(data);
}
