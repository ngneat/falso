import { rand } from './core';
import { data } from './time-zone.i18n.json';

export function timeZone() {
  return rand(data);
}
