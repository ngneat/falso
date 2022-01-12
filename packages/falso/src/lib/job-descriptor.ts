import { rand } from './core';
import { data } from './job-descriptor.json';

export function jobDescriptor() {
  return rand(data);
}
