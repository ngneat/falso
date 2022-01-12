import { rand } from './core';
import { data } from './password.i18n.json';

export function password() {
  return rand(data);
}
