import { rand } from './core';
import { data } from './company-name.i18n.json';

export function companyName() {
  return rand(data);
}
