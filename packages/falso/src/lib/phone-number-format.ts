import { rand } from './core';
import { data } from './phone-number-format.i18n.json';

export function phoneNumberFormat() {
  return rand(data);
}
