import { rand } from './core';
import { data } from './iban.json';

export function iban() {
  return rand(data);
}
