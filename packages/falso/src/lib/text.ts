import { FakeOptions, fake, getRandomInRange } from './core';
import { word } from './word';

export interface TextOptions extends FakeOptions {
  charCount?: number;
}

function getSpecialCharacter(): string {
  const randomNumber = getRandomInRange({ min: 1, max: 10, fraction: 0 });

  if (randomNumber === 1) {
    return '.';
  }

  if (randomNumber === 2) {
    return ',';
  }

  return '';
}

function generateSentence(charCount: number): string {
  let text = word({ capitalize: true });
  let capitalize = false;
  let totalWords = 1;

  while (text.length < charCount) {
    let randomWord: string;
    let specialChar = '';

    if (capitalize) {
      randomWord = word({ capitalize: true });
      capitalize = false;
    } else {
      randomWord = word();
    }

    if (totalWords > 2) {
      specialChar = getSpecialCharacter();
    }

    if (specialChar === '.') {
      capitalize = true;
    }

    text += ` ${randomWord}${specialChar}`;
    totalWords++;
  }

  return text.substring(0, charCount);
}

export function text<Options extends TextOptions>(
  options?: Options
): string | string[] | void {
  const charCount: number = options?.charCount ?? 10;

  if (charCount < 1 || isNaN(charCount)) {
    throw 'Character count must be greater than 0';
  }

  const factory = () => {
    return generateSentence(charCount);
  };

  return fake(factory, options);
}
