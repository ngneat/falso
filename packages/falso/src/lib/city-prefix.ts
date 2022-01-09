import { rand } from './core';

export function cityPrefix() {
  return rand(['Port', 'New', 'Lake', 'North', 'East', 'South', 'West']);
}
