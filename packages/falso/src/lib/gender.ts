import { rand } from './core';
import { data } from './gender.json';

export function gender() {
  return rand(data);
}
