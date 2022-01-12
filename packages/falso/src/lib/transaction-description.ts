import { rand } from './core';
import { data } from './transaction-description.i18n.json';

export function transactionDescription() {
  return rand(data);
}
