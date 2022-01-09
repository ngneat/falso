import { rand } from './core';

export function animalType() {
  return rand([
    'bird',
    'cetacean',
    'rabbit',
    'bear',
    'cat',
    'snake',
    'cow',
    'insect',
    'crocodilia',
    'horse',
    'fish',
    'dog',
    'lion',
  ]);
}
