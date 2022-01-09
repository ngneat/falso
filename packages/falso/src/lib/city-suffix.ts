import { rand } from './core';

export function citySuffix() {
  return rand([
    'side',
    'fort',
    'furt',
    'view',
    'burgh',
    'bury',
    'ton',
    'land',
    'mouth',
    'port',
    'ville',
    'stad',
    'chester',
    'borough',
    'haven',
    'shire',
    'town',
  ]);
}
