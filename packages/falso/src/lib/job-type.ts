import { rand } from './core';
import { data } from './job-type.json';

export function jobType() {
  return rand(data);
}
