import { rand } from './core';
import { data } from './state-abbr.json';

export function stateAbbr() {
  return rand(data);
}
