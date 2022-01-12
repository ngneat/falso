import { rand } from './core';
import { data } from './protocol.json';

export function protocol() {
  return rand(data);
}
