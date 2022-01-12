import { rand } from './core';
import { data } from './middle-name.json';

export function middleName() {
  return rand(data);
}
