import { rand } from './core';
import { data } from './paragraph.json';

export function paragraph() {
  return rand(data);
}
