import { FakeOptions, fake } from './core/core';
import { randSentence } from './sentence';

export interface LineOptions extends FakeOptions {
  lineCount?: number;
}

/**
 * Generate random lines.
 *
 * @category text
 *
 * @example
 *
 * randLine()
 *
 * @example
 *
 * randLine({ lineCount: 10 })
 *
 */
export function randLine<Options extends LineOptions>(options?: Options) {
  const lineCount: number = options?.lineCount ?? 5;

  if (lineCount < 1 || isNaN(lineCount)) {
    throw 'Line count must be greater than 0';
  }

  const factory = () => {
    let lines = `${randSentence()}\n`;

    for (let i = 0; i < lineCount - 1; i++) {
      lines += `${randSentence()}\n`;
    }

    return lines;
  };

  return fake(factory, options);
}
