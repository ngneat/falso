import { fake, FakeOptions } from './core/core';
import { randSentence } from './sentence';
import { randAlpha } from './alpha';

export interface TextOptions extends FakeOptions {
  charCount?: number;
}

/**
 * Generate a random text.
 *
 * @category text
 *
 * @example
 *
 * randText()
 *
 * @example
 *
 * randText({ length: 10 })
 *
 * @example
 *
 * randText({ charCount: 10 }) // default is 10
 *
 */
export function randText<Options extends TextOptions = never>(
  options?: Options
) {
  const charCount: number = options?.charCount ?? 10;

  if (charCount < 1 || isNaN(charCount)) {
    throw 'Character count must be greater than 0';
  }

  const factory = () => {
    let text = randSentence();

    if (charCount === 1) {
      return randAlpha();
    }

    while (text.length < charCount) {
      text += ` ${randSentence()}`;
    }

    text = text.substring(0, charCount - 2);
    // Ensure last char is always a full-stop (not a space)
    text += `${randAlpha()}.`;

    return text;
  };

  return fake(factory, options);
}
