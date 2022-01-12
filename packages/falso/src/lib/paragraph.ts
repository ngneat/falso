import { rand } from './core';
import { data } from './paragraph.i18n.json';

export function paragraph() {
  return rand(data);
}
