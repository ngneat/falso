import { rand } from './core';
import { data } from './weekday.json';

export function weekday() {
  return rand(data);
}
