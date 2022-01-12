import { rand } from './core';
import { data } from './first-name.json';

export function firstName() {
  return rand(data);
}
