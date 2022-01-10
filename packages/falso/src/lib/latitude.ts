import { rand } from './core';
import { data } from './latitude.json';

export function latitude() {
  return rand(data);
}
