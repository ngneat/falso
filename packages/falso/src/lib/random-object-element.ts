import { rand } from './core';
import { data } from './random-object-element.i18n.json';

export function randomObjectElement() {
  return rand(data);
}
