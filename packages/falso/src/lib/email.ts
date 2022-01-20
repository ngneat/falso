import { fake, FakeOptions } from './core/core';
import { randDomainSuffix } from './domain-suffix';
import { randFullName } from './full-name';
import { randBoolean } from './boolean';
import { randNumber } from './number';
import { randEmailProvider } from './email-provider';

export interface EmailOptions extends FakeOptions {
  provider?: string;
  suffix?: string;
  nameSeparator?: NameSeparators;
}

export type NameSeparators = '.' | '-' | '_' | '+' | 'none';

function randFormattedName(nameSeparator?: NameSeparators): string {
  let separator: string = '';

  if (!nameSeparator) {
    separator = fake(['.', '-', '_', '+', '']);
  } else if (nameSeparator !== 'none') {
    separator = nameSeparator;
  }

  let name = randFullName({ withAccents: false }).replace(' ', separator);

  if (randBoolean()) {
    name += randNumber({ min: 1, max: 1_000 });
  }

  return name.toLowerCase();
}

/**
 * Generate a random email.
 *
 * @category Person
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
 * randEmail({ provider: 'gmail' })
 *
 * @example
 *
 * randEmail({ suffix: 'com' })
 *
 * @example
 *
 * randEmail({ nameSeparator: '.' })
 *
 */
export function randEmail<Options extends EmailOptions>(options?: Options) {
  const factory = () => {
    const emailProvider = options?.provider || randEmailProvider();
    const formattedName = randFormattedName(options?.nameSeparator);
    const emailSuffix = options?.suffix || randDomainSuffix();

    return `${formattedName}@${emailProvider}.${emailSuffix}`;
  };

  return fake(factory, options);
}
