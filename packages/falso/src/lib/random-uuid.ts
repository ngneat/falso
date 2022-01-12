import { rand } from './core';
import { data } from './random-uuid.json';

export function randomUuid() {
  return rand(data);
}
