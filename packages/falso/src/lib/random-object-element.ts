import { rand } from './core';
import { data } from './random-object-element.json';

export function randomObjectElement() {
  return rand(data);
}
