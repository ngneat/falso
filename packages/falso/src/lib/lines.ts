import { rand } from './core';
import { data } from './lines.i18n.json';

export function lines() {
  return rand(data);
}
