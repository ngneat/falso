import { rand } from './core';
import { data } from './email.json';

export function email() {
  return rand(data);
}
