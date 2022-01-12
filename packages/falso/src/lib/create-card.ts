import { rand } from './core';
import { data } from './create-card.json';

export function createCard() {
  return rand(data);
}
