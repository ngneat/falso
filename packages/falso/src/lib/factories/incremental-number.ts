import { isNil } from '../core/validators';

export interface IncrementalNumberOptions {
  from: number;
  to?: number;
  step: number;
}

/**
 * Generate incremental numbers.
 *
 * @category factories
 *
 * @example
 *
 * const factory = incrementalNumber()
 * factory() // returns 1
 * factory() // returns 2
 *
 * @example
 *
 * const factory = incrementalNumber({from: 10, to: 100, step: 10})
 * factory() // returns 10
 * factory() // returns 20
 * ...
 *
 */
export function incrementalNumber(
  options: Required<IncrementalNumberOptions>
): () => number | undefined;
export function incrementalNumber(
  options?: IncrementalNumberOptions
): () => number;
export function incrementalNumber(
  options: IncrementalNumberOptions = { from: 1, step: 1 }
): () => number | undefined {
  if (options.step === 0) {
    throw new Error(
      '`step` should be a number different than 0, for example: {from: 1, step: 1}'
    );
  }

  if (options.from < 0) {
    throw new Error('`from` should be a number greater than 0');
  }

  if (!isNil(options.to)) {
    if (options.to < 0) {
      throw new Error(
        '`to` should be a number greater than from and greater than 0'
      );
    }

    if (options.from > options.to && options.step > 0) {
      throw new Error(
        '`to` should be higher or equal to `from`, for example: {from: 1, to: 3}'
      );
    }

    if (options.from < options.to && options.step < 0) {
      throw new Error(
        '`to` should be lower or equal to `from`, for example: {from: 5, to: 1, step: -1}'
      );
    }
  }

  let currentValue = options.from;

  return () => {
    if (!isNil(options.to)) {
      if (options.step > 0 && currentValue > options.to) return undefined;
      if (options.step < 0 && currentValue < options.to) return undefined;
    }

    const next = currentValue;
    currentValue = currentValue + options.step;

    return next;
  };
}
