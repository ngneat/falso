import { rand } from './core';
import { data } from './img-avatar.i18n.json';

export function imgAvatar() {
  return rand(data);
}
