import { rand } from './core';
import { data } from './zip-code-by-state.json';

export function zipCodeByState() {
  return rand(data);
}
