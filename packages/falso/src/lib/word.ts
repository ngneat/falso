import { fake, FakeOptions } from './core/core';
import { data } from './word.json';
import { rand } from './rand';
import { capitalizeFirstLetter } from './core/string-manipulation';

export interface WordOptions extends FakeOptions {
  capitalize?: boolean;
}

/**
 * Generate a random word.
 *
 * @category text
 *
 * @example
 *
 * randWord()
 *
 * @example
 *
 * randWord({ capitalize: true }) // default is false
 *
 * @example
 *
 * randWord({ length: 10 })
 *
 */
export function randWord<Options extends WordOptions = never>(
  options?: Options
) {
  const factory = () => {
    let word = rand(data);

    if (options?.capitalize) {
      word = capitalizeFirstLetter(word);
    }

    return word;
  };

  return fake(factory, options);
}
