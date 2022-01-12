import { rand } from './core';
import { data } from './img-data-uri.i18n.json';

export function imgDataUri() {
  return rand(data);
}
