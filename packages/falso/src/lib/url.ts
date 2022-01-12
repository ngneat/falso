import { rand } from './core';
import { data } from './url.json';

export function url() {
  return rand(data);
}
