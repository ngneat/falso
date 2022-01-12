import { rand } from './core';
import { data } from './job-area.json';

export function jobArea() {
  return rand(data);
}
