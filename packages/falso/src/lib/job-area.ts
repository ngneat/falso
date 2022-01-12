import { rand } from './core';
import { data } from './job-area.i18n.json';

export function jobArea() {
  return rand(data);
}
