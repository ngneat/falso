import { rand } from './core';
import { data } from './img-nature.i18n.json';

export function imgNature() {
  return rand(data);
}
