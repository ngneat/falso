import { rand } from './core';
import { data } from './transaction-description.json';

export function transactionDescription() {
  return rand(data);
}
