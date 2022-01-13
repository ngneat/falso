import { FakeOptions, fake } from './core';
import { data } from './transaction-type.json';

export function transactionType<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
