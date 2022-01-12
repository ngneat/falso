import { rand } from './core';
import { data } from './protocol.i18n.json';

export function protocol() {
  return rand(data);
}
