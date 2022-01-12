import { rand } from './core';
import { data } from './time-zone.json';

export function timeZone() {
  return rand(data);
}
