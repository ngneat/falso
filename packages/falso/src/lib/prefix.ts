import { rand } from './core';
import { data } from './prefix.json';

export function prefix() {
  return rand(data);
}
