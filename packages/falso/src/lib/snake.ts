import { rand } from './core';
import { data } from './snake.json';

export function snake() {
  return rand(data);
}
