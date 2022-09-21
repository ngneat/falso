import { FakeOptions, fake } from './core/core';
import { randFloat } from './float';

interface RandChangeBooleanOptions extends FakeOptions {
  chanceTrue?: number;
  chanceFalse?: number;
}

/**
 * Generate a random chance boolean.
 *
 * @category general
 *
 * @example
 *
 * randChanceBoolean({ chanceTrue: 0.78 }) // Will be true 78% of times
 *
 * @example
 *
 * randChanceBoolean({ chanceFalse: 0.156 }) // Will be false 15.6% of times
 *
 * @example
 *
 * randChanceBoolean({ length: 10 })
 *
 */
export function randChanceBoolean<
  Options extends RandChangeBooleanOptions = never
>(options?: Options) {
  return fake(() => {
    if (
      options?.chanceTrue === undefined &&
      options?.chanceFalse === undefined
    ) {
      throw new Error('One of chanceTrue and chanceFalse must be provided');
    }

    if (
      options?.chanceTrue !== undefined &&
      options?.chanceFalse !== undefined
    ) {
      throw new Error("chanceTrue and chanceFalse can't both be provided");
    }

    if (options.chanceFalse !== undefined) {
      return randFloat({ min: 0, max: 1, fraction: 15 }) >= options.chanceFalse;
    } else if (options.chanceTrue !== undefined) {
      return randFloat({ min: 0, max: 1, fraction: 15 }) <= options.chanceTrue;
    } else {
      throw new Error('Unexpected error occurred');
    }
  }, options);
}
