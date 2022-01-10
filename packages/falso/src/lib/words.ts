import { rand } from './core';
import { data } from './words.json';

export function words() {
  return rand(data);
}
