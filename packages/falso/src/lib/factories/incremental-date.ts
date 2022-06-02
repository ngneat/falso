import { isNotNil } from '../core/isNotNil';
import { incrementalNumber } from './incremental-number';

export interface IncrementalDateOptions {
  from: Date;
  to?: Date;
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
  options: IncrementalDateOptions = {
    from: new Date(),
    step: millisecondsPerDay,
  }
): () => Date | undefined {
  if (options.step <= 0) {
    throw new Error(
      '`step` should be a number greater than 0, for example: {from: new Date(), step: 10}'
    );
  }

  if (isNotNil(options.to) && options.to < options.from) {
    throw new Error('`to` should be a date greater than `from`');
  }

  const numberFactory = incrementalNumber({
    from: options.from.getTime(),
    to: options.to?.getTime(),
    step: options.step,
  });

  return () => {
    const next = numberFactory();
    return next ? new Date(next) : undefined;
  };
}
