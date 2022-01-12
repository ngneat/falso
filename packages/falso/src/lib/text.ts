import { word } from './word';

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

export function text({ charCount } = { charCount: 10 }): string | void {
  if (charCount < 1 || !charCount) {
    throw 'Character count must be greater than 0';
  }

  return generateSentence(charCount);
}
