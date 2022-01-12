import { rand } from './core';
import { data } from './company-suffix.json';

export function companySuffix() {
  return rand(data);
}
