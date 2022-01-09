import { rand } from './core';

export function suffix() {
  return rand([
    'PhD',
    'III',
    'II',
    'Sr.',
    'V',
    'DDS',
    'MD',
    'I',
    'Jr.',
    'IV',
    'DVM',
  ]);
}
