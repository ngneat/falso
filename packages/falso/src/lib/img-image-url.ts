import { rand } from './core';
import { data } from './img-image-url.i18n.json';

export function imgImageUrl() {
  return rand(data);
}
