import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randWord } from './word';

const maxWords = 50;

function getSpecialCharacter(wordCount: number): string {
  const randomNumber = getRandomInRange({ min: 1, max: 10, fraction: 0 });

  if (randomNumber === 1 || wordCount === maxWords) {
    return '.';
  }

  if (randomNumber === 2) {
    return ',';
  }

  return '';
}

/**
 * Generate a random sentence.
 *
 * @category text
 *
 * @example
 *
 * randSentence()
 *
 * @example
 *
 * randSentence({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randSentence<Options extends FakeOptions = never>(
  options?: Options
) {
  const factory = () => {
    let text = randWord({ capitalize: true });
    let wordCount = 1;

    while (wordCount < maxWords) {
      const randomWord = randWord();
      let specialChar = '';

      wordCount++;

      if (wordCount > 3) {
        specialChar = getSpecialCharacter(wordCount);
      }

      text += ` ${randomWord}${specialChar}`;

      if (specialChar === '.') {
        break;
      }
    }

    return text;
  };

  return fake(factory, options);
}
