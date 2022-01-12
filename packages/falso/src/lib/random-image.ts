import { rand } from './core';
import { data } from './random-image.i18n.json';

export function randomImage() {
  return rand(data);
}
