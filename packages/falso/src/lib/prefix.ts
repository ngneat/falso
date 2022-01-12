import { rand } from './core';
import { data } from './prefix.i18n.json';

export function prefix() {
  return rand(data);
}
