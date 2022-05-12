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
 * text()
 *
 * @example
 *
 * text({ charCount: 10 }) // default is 10
 *
 * @example
 *
 * text({ length: 10 })
 *
 * @example
 *
 * text({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randText<Options extends TextOptions = never>(
  options?: Options
) {
  const charCount: number = options?.charCount ?? 10;

  if (charCount < 1 || isNaN(charCount)) {
    throw new Error('Character count must be greater than 0');
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
