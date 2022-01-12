import { rand } from './core';
import { data } from './zip-code-by-state.i18n.json';

export function zipCodeByState() {
  return rand(data);
}
