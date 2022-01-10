import { rand } from './core';
import { data } from './department.json';

export function department() {
  return rand(data);
}
