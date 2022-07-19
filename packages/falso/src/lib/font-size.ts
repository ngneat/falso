import { randNumber } from './number';
import { FakeOptions, fake } from './core/core';

export type FontSizeSuffix =
  | 'px'
  | 'cm'
  | 'em'
  | 'rem'
  | 'vw'
  | 'vh'
  | 'vmin'
  | 'vmax'
  | '%';
export interface FontSizeOptions extends FakeOptions {
  suffix?: FontSizeSuffix;
}

/**
 * Generate a random font size.
 *
 * @category code
 *
 * @example
 *
 * randFontSize()
 *
 * @example
 *
 * randFontSize({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randFontSize<Options extends FontSizeOptions = never>(
  options?: Options
) {
  return fake(() => {
    const length = randNumber({ min: 0, max: 2000, fraction: 2 });
    const suffix = options?.suffix ?? 'px';

    return `${length}${suffix}`;
  }, options);
}
