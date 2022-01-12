import { rand } from './core';
import { data } from './middle-name.i18n.json';

export function middleName() {
  return rand(data);
}
