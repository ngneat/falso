import { rand } from './core';
import { data } from './contextual-card.i18n.json';

export function contextualCard() {
  return rand(data);
}
