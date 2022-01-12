import { rand } from './core';
import { data } from './img-sports.json';

export function imgSports() {
  return rand(data);
}
