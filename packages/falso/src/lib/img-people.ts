import { rand } from './core';
import { data } from './img-people.i18n.json';

export function imgPeople() {
  return rand(data);
}
