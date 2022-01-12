import { rand } from './core';
import { data } from './img-sports.i18n.json';

export function imgSports() {
  return rand(data);
}
