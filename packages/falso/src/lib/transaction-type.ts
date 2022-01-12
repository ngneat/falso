import { rand } from './core';
import { data } from './transaction-type.i18n.json';

export function transactionType() {
  return rand(data);
}
