import { rand } from './core';
import { data } from './title.json';

export function title() {
  return rand(data);
}
