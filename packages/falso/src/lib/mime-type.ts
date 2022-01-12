import { rand } from './core';
import { data } from './mime-type.i18n.json';

export function mimeType() {
  return rand(data);
}
