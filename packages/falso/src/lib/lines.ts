import { rand } from './core';
import { data } from './lines.json';

export function lines() {
  return rand(data);
}
