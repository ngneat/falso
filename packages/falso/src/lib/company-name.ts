import { rand } from './core';
import { data } from './company-name.json';

export function companyName() {
  return rand(data);
}
