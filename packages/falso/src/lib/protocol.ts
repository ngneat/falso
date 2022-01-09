import { rand } from './core';

export function protocol() {
  return rand(['https', 'http']);
}
