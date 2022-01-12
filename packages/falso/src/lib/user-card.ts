import { rand } from './core';
import { data } from './user-card.i18n.json';

export function userCard() {
  return rand(data);
}
