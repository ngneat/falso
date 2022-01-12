import { rand } from './core';
import { data } from './title.i18n.json';

export function title() {
  return rand(data);
}
