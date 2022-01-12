import { rand } from './core';
import { data } from './genre.json';

export function genre() {
  return rand(data);
}
