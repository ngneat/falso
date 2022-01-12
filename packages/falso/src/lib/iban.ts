import { rand } from './core';
import { data } from './iban.i18n.json';

export function iban() {
  return rand(data);
}
