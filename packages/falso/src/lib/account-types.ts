import { rand } from './core';

export function accountTypes() {
  return rand([
    "Checking",
    "Savings",
    "Money Market",
    "Investment",
    "Home Loan",
    "Credit Card",
    "Auto Loan",
    "Personal Loan"
  ]);
}
