import { rand } from './core';
import { data } from './transaction-type.json';

export function transactionType() {
  return rand(data);
}
