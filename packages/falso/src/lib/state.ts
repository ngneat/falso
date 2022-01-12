import { rand } from './core';
import { data } from './state.i18n.json';

export function state() {
  return rand(data);
}
