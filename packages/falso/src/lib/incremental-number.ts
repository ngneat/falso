export interface RandIncrementalNumberOptions {
  from: number;
  to?: number;
  step: number;
}

/**
 * Generate incremental numbers.
 *
 * @category general
 *
 * @example
 *
 * randIncrementalNumber()
 *
 * @example
 *
 * randIncrementalNumber({ from:100, to: 200, step: 10 })
 *
 * @example
 *
 * randMask({ length: 10 })
 *
 */
export function randIncrementalNumber(
  options: RandIncrementalNumberOptions = { from: 1, step: 1 }
): () => number | undefined {
  if (options.step === 0) {
    throw new Error(
      '`step` should be a number different than 0, for example: {from: 1, step: 1}'
    );
  }

  if (options.from < 0) {
    throw new Error('`from` should be a number greater than 0');
  }

  if (options.to != null) {
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

  let crt = options.from;

  return () => {
    if (options.to != null) {
      if (options.step > 0 && crt > options.to) return undefined;
      if (options.step < 0 && crt < options.to) return undefined;
    }

    const next = crt;
    crt = crt + options.step;

    return next;
  };
}
