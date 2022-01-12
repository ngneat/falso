import { rand } from './core';
import { data } from './adjective.json';

export function adjective() {
  return rand(data);
}
