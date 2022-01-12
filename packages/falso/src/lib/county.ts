import { rand } from './core';
import { data } from './county.json';

export function county() {
  return rand(data);
}
