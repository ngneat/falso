import { rand } from './core';

export function accountName() {
  return rand([
    'Personal Loan Account',
    'Home Loan Account',
    'Investment Account',
    'Savings Account',
    'Credit Card Account',
    'Checking Account',
    'Auto Loan Account',
    'Money Market Account',
  ]);
}
