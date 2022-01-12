import { rand } from './core';
import { data } from './random-uuid.i18n.json';

export function randomUuid() {
  return rand(data);
}
