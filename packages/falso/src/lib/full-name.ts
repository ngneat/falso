import { fake, FakeOptions } from './core/core';
import { randLastName } from './last-name';
import { randFirstName } from './first-name';

export interface NameOptions extends FakeOptions {
  withAccents?: boolean;
}

/**
 * Generate a random full name.
 *
 * @category Address
 *
 * @example
 *
 * randFullName()
 *
 * @example
 *
 * randFullName({ withAccents: false })
 *
 * @example
 *
 * randFullName({ length: 10 })
 *
 */
export function randFullName<Options extends NameOptions>(options?: Options) {
  const factory = () => {
    const nameOptions = {
      withAccents: options?.withAccents,
    };

    return `${randFirstName(nameOptions)} ${randLastName(nameOptions)}`;
  };

  return fake(factory, options);
}
