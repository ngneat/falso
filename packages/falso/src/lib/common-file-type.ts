import { rand } from './core';

export function commonFileType() {
  return rand(['video', 'application', 'text', 'image', 'audio']);
}
