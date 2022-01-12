import { rand } from './core';
import { data } from './phone-number.json';

export function phoneNumber() {
  return rand(data);
}
