import { FakeOptions, fake, getRandomInRange } from './core/core';
import { randText } from './text';

export interface TextRangeOptions extends FakeOptions {
  min: number;
  max: number;
}

/**
 * Generate a random text range.
 *
 * @category text
 *
 * @example
 *
 * randTextRange({ min: 10, max: 100 })
 *
 * @example
 *
 * randTextRange({ min: 10, max: 100, length: 10 })
 *
 * @example
 *
 * randTextRange({ min: 10, max: 100, length: 10, priority: 'unique' }) // default is 'length' ('length' | 'unique')
 *
 */
export function randTextRange<Options extends TextRangeOptions = never>(
  options: Options
) {
  const min = options.min;
  const max = options.max;

  if (min >= max) {
    throw new Error('Min must be less than max');
  }

  const factory = () => {
    const charCount = getRandomInRange({ min, max });

    return randText({ charCount });
  };

  return fake(factory, options);
}
