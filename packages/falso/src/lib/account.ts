import { rand } from './core';
import { data } from './account.json';

export function account() {
  return rand(data);
}
