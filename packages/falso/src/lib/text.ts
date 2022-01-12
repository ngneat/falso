import { rand } from './core';
import { word } from './word';

function randomSentence() {
  return rand([
    `${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()}, ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()}, ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()}, ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} - ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()} ${word()} ${word()} ${word()} ${word()} (${word()} ${word()} ${word()} ${word()})`,
    `${word()} ${word()} "${word()} ${word()}" ${word()} ${word()} ${word()} ${word()} ${word()}.`,
    `${word()} ${word()}, ${word()} ${word()} ${word()} ${word()} ${word()} ${word()} ${word()}, ${word()} ${word()} ${word()} ${word()} ${word()}.`,
  ]);
}

export function text({ charCount } = { charCount: 10 }): string | void {
  if (charCount < 1) {
    throw 'Character count must be greater than 0';
    return;
  }

  let text = randomSentence();

  while (text.length < charCount) {
    text = `${text} ${randomSentence()}`;
  }

  return text.substring(0, charCount);
}
