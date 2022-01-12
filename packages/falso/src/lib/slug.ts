import { rand } from './core';
import { data } from './slug.i18n.json';

export function slug() {
  return rand(data);
}
