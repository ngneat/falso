import { rand } from './core';
import { data } from './text.i18n.json';

export function text() {
  return rand(data);
}
