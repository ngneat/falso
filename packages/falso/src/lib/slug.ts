import { rand } from './core';
import { data } from './slug.json';

export function slug() {
  return rand(data);
}
