import { rand } from './core';
import { data } from './password.json';

export function password() {
  return rand(data);
}
