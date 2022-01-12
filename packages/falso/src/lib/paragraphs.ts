import { rand } from './core';
import { data } from './paragraphs.i18n.json';

export function paragraphs() {
  return rand(data);
}
