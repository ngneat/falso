import { FakeOptions, fake } from './core/core';
import { sentence } from './sentence';
import { randomAlpha } from './random-alpha';

export interface TextOptions extends FakeOptions {
  charCount?: number;
}

/**
 * Generate a random text.
 *
 * @category TBD
 *
 * @example
 *
 * text()
 *
 * @example
 *
 * text({ charCount: 10 })
 *
 */
export function text<Options extends TextOptions>(
  options?: Options
): string | string[] | void {
  const charCount: number = options?.charCount ?? 10;

  if (charCount < 1 || isNaN(charCount)) {
    throw 'Character count must be greater than 0';
  }

  const factory = () => {
    let text = sentence();

    if (charCount === 1) {
      return randomAlpha();
    }

    while (text.length < charCount) {
      text += ` ${sentence()}`;
    }

    text = text.substring(0, charCount - 2);
    // Ensure last char is always a full-stop (not a space)
    text += `${randomAlpha()}.`;

    return text;
  };

  return fake(factory, options);
}
