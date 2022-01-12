import { rand } from './core';
import { data } from './account-name.i18n.json';

export function accountName() {
  return rand(data);
}
