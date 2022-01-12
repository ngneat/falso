import { rand } from './core';
import { data } from './crocodilia.i18n.json';

export function crocodilia() {
  return rand(data);
}
