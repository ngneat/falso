import { rand } from './core';
import { data } from './img.json';

export function img() {
  return rand(data);
}
