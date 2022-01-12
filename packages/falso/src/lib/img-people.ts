import { rand } from './core';
import { data } from './img-people.json';

export function imgPeople() {
  return rand(data);
}
