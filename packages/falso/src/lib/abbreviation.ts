import { rand } from './core';
import { data } from './abbreviation.json';

export function abbreviation() {
  return rand(data);
}
