import { rand } from './core';
import { data } from './cetacean.json';

export function cetacean() {
  return rand(data);
}
