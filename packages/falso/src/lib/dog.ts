import { rand } from './core';
import { data } from './dog.i18n.json';

export function dog() {
  return rand(data);
}
