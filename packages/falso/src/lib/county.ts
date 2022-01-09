import { rand } from './core';

export function county() {
  return rand([
    'Avon',
    'Berkshire',
    'Buckinghamshire',
    'Borders',
    'Cambridgeshire',
    'Bedfordshire',
  ]);
}
