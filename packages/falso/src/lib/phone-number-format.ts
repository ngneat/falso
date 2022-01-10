import { rand } from './core';
import { data } from './phone-number-format.json';

export function phoneNumberFormat() {
  return rand(data);
}
