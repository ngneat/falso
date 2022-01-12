import { rand } from './core';
import { data } from './img-avatar.json';

export function imgAvatar() {
  return rand(data);
}
