import { rand } from './core';
import { data } from './email.i18n.json';

export function email() {
  return rand(data);
}
