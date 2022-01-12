import { rand } from './core';
import { data } from './account.i18n.json';

export function account() {
  return rand(data);
}
