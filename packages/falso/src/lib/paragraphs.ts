import { rand } from './core';
import { data } from './paragraphs.json';

export function paragraphs() {
  return rand(data);
}
