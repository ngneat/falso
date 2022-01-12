import { rand } from './core';
import { data } from './account-name.json';

export function accountName() {
  return rand(data);
}
