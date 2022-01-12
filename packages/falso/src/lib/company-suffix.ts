import { rand } from './core';
import { data } from './company-suffix.i18n.json';

export function companySuffix() {
  return rand(data);
}
