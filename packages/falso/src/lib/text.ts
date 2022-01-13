import { FakeOptions, fake } from './core';
import { word } from './word';

export interface TextOptions extends FakeOptions {
  charCount?: number;
}

function getSpecialCharacter(): string {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber === 1) {
    return '.';
  }

  if (randomNumber === 2) {
    return ',';
  }

  return '';
}

function generateSentence(charCount: number): string {
  let text = word({ capitalise: true });
  let capitalise = false;
  let totalWords = 1;

  while (text.length < charCount) {
    let randomWord: string;
    let specialChar = '';

    if (capitalise) {
      randomWord = word({ capitalise: true });
      capitalise = false;
    } else {
      randomWord = word();
    }

    if (totalWords > 2) {
      specialChar = getSpecialCharacter();
    }

    if (specialChar === '.') {
      capitalise = true;
    }

    text += ` ${randomWord}${specialChar}`;
    totalWords++;
  }

  return text.substring(0, charCount);
}

export function text<Options extends TextOptions>(
  options?: Options
): string | string[] | void {
  if (options?.charCount && options.charCount < 1) {
    throw 'Character count must be greater than 0';
  }

  const factory = () => {
    return generateSentence(options?.charCount || 10);
  };

  return fake(factory, options);
}
