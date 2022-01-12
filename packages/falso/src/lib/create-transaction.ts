import { rand } from './core';
import { data } from './create-transaction.i18n.json';

export function createTransaction() {
  return rand(data);
}
