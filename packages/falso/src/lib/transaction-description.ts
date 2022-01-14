import { FakeOptions, fake } from './core';
import { data } from './transaction-description.json';

// TODO - generate programmatically
export function transactionDescription<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
