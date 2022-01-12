import { rand } from './core';
import { data } from './state-abbr.i18n.json';

export function stateAbbr() {
  return rand(data);
}
