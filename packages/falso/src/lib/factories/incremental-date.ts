import { isNil } from '../core/validators';
import { incrementalNumber } from './incremental-number';

export interface IncrementalDateOptions {
  from: Date | string | number;
  to?: Date | string | number;
  step: number;
}

const millisecondsPerDay = 24 * 60 * 60 * 1_000;

/**
 * Generate incremental numbers.
 *
 * @category factories
 *
 * @example
 *
 * const factory = incrementalDate()
 * // seeds factory with new Date()
 * factory() // returns seed
 * factory() // returns seed + 1 day
 *
 * @example
 *
 * const factory = incrementalDate({from: new Date(2022,1,1), to: new Date(2022,1,3), step: 10})
 * // seeds factory with `from` value
 * factory() // returns seed
 * factory() // returns seed + 10ms
 * ...
 *
 */
export function incrementalDate(
  options: Required<IncrementalDateOptions>
): () => Date | undefined;
export function incrementalDate(options?: IncrementalDateOptions): () => Date;
export function incrementalDate(
  options: IncrementalDateOptions = {
    from: new Date(),
    step: millisecondsPerDay,
  }
): () => Date | undefined {
  const from = new Date(options.from);
  const to = options.to ? new Date(options.to) : undefined;

  if (options.step === 0) {
    throw new Error(
      '`step` should be a number different from 0, for example: {from: new Date(), step: 10}'
    );
  }

  if (!isNil(to)) {
    if (from > to && options.step > 0) {
      throw new Error('`to` should be a date greater than or equal to `from`');
    }

    if (from < to && options.step < 0) {
      throw new Error('`to` should be a date lower than or equal to `from`');
    }
  }

  const numberFactory = incrementalNumber({
    from: from.getTime(),
    to: to?.getTime(),
    step: options.step,
  });

  return () => {
    const next = numberFactory();
    return next ? new Date(next) : undefined;
  };
}
