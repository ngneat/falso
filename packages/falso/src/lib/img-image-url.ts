import { rand } from './core';
import { data } from './img-image-url.json';

export function imgImageUrl() {
  return rand(data);
}
