import { rand } from './core';
import { data } from './crocodilia.json';

export function crocodilia() {
  return rand(data);
}
