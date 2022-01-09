import { rand } from './core';

export function transactionType() {
  return rand(['deposit', 'withdrawal', 'payment', 'invoice']);
}
