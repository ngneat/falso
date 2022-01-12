import { rand } from './core';
import { data } from './bird.i18n.json';

export function bird() {
  return rand(data);
}
