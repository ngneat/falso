import { rand } from './core';
import { data } from './state.json';

export function state() {
  return rand(data);
}
