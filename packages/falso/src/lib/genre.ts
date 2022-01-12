import { rand } from './core';
import { data } from './genre.i18n.json';

export function genre() {
  return rand(data);
}
