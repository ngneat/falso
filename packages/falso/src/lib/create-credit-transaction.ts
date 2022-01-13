import { FakeOptions, fake } from './core';
import { data } from './create-credit-transaction.json';

export interface CreditTransaction {
  amount: string;
  date: string;
  business: string;
  name: string;
  type: string;
  account: string;
}

export function createCreditTransaction<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
