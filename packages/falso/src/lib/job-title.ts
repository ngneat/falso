import { rand } from './core';
import { data } from './job-title.json';

export function jobTitle() {
  return rand(data);
}
