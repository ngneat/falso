import { rand } from './core';
import { data } from './snake.i18n.json';

export function snake() {
  return rand(data);
}
