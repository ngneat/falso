import { FakeOptions, fake } from './core/core';
import { data } from './transaction-description.json';

// TODO - generate programmatically
export function randTransactionDescription<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
