import { rand } from '../../core';
import { data } from './abbreviation.i18n.json';

export function abbreviation() {
  return rand(data);
}
