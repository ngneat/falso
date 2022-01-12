import { rand } from './core';
import { data } from './img-nightlife.json';

export function imgNightlife() {
  return rand(data);
}
