import { FakeOptions, fake } from './core/core';
import { data } from './phrase.json';

/**
 * Generate a random phrase.
 *
 * @category text
 *
 * @example
 *
 * randPhrase()
 *
 * @example
 *
 * randPhrase({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Try to program the GB interface, maybe it will copy the wireless hard drive!'
 * 'Try to bypass the GB panel, maybe it will synthesize the back-end transmitter!'
 * 'If we program the protocol, we can get to the SDD application through the virtual RAM pixel!'
 */

export function randPhrase<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
