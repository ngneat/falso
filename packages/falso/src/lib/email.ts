import { fake, FakeOptions } from './core/core';
import { randDomainSuffix } from './domain-suffix';
import { randBoolean } from './boolean';
import { randNumber } from './number';
import { randEmailProvider } from './email-provider';
import { randFirstName } from './first-name';
import { randLastName } from './last-name';

export interface EmailOptions extends FakeOptions {
  firstName?: string;
  lastName?: string;
  provider?: string;
  suffix?: string;
  nameSeparator?: NameSeparators;
}

export type NameSeparators = '.' | '-' | '_' | '+' | 'none';

function randFormattedName<Options extends EmailOptions = never>(
  options?: Options
): string {
  let separator = '';
  const firstName = options?.firstName ?? randFirstName({ withAccents: false });
  const lastName = options?.lastName ?? randLastName({ withAccents: false });

  if (!options?.nameSeparator) {
    separator = fake(['.', '-', '_', '+', '']);
  } else if (options.nameSeparator !== 'none') {
    separator = options.nameSeparator;
  }

  let name = `${firstName} ${lastName}`.replace(' ', separator);

  if (randBoolean()) {
    name += randNumber({ min: 1, max: 1_000 });
  }

  return name.toLowerCase();
}

/**
 * Generate a random email.
 *
 * @category Person, User
 *
 * @example
 *
 * randEmail()
 *
 * @example
 *
 * randEmail({ length: 10 })
 *
 * @example
 *
 * randEmail({ firstName: 'Netanel' })
 *
 * @example
 *
 * randEmail({ lastName: 'Basal' })
 *
 * @example
 *
 * randEmail({ nameSeparator: '.' })
 *
 * @example
 *
 * randEmail({ provider: 'gmail' })
 *
 * @example
 *
 * randEmail({ suffix: 'com' })
 *
 *
 */
export function randEmail<Options extends EmailOptions = never>(
  options?: Options
) {
  const factory = () => {
    const emailProvider = options?.provider ?? randEmailProvider();
    const formattedName = randFormattedName(options);
    const emailSuffix = options?.suffix ?? randDomainSuffix();

    return `${formattedName}@${emailProvider}.${emailSuffix}`;
  };

  return fake(factory, options);
}
