import { rand } from './core';
import { data } from './phrase.json';

export function phrase() {
  return rand(data);
}
