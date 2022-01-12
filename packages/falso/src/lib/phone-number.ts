import { rand } from './core';
import { data } from './phone-number.i18n.json';

export function phoneNumber() {
  return rand(data);
}
