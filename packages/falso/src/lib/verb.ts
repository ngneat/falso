import { rand } from './core';
import { data } from './verb.i18n.json';

export function verb() {
  return rand(data);
}
