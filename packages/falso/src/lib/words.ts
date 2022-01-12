import { rand } from './core';
import { data } from './words.i18n.json';

export function words() {
  return rand(data);
}
