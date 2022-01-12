import { rand } from './core';
import { data } from './word.json';

function capitaliseFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function word({ capitalise } = { capitalise: false }) {
  let word = rand(data);

  if (capitalise) {
    word = capitaliseFirstLetter(word);
  }

  return word;
}
