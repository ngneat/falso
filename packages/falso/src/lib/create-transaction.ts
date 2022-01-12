import { rand } from './core';
import { data } from './create-transaction.json';

export function createTransaction() {
  return rand(data);
}
