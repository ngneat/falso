import { fake, FakeOptions } from './core/core';
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
 * randLine({ lineCount: 10 }) // default is 5
 *
 * @example
 *
 * randLine({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randLine<Options extends LineOptions = never>(
  options?: Options
) {
  const lineCount: number = options?.lineCount ?? 5;

  if (lineCount < 1 || isNaN(lineCount)) {
    throw Error('Line count must be greater than 0');
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
