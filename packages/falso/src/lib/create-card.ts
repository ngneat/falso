import { rand } from './core';
import { data } from './create-card.i18n.json';

export function createCard() {
  return rand(data);
}
