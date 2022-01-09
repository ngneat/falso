import { rand } from './core';

export function prefix() {
  return rand(['Dr.', 'Miss', 'Mr.', 'Mrs.', 'Ms.']);
}
