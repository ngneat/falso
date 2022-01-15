import { fake, FakeOptions } from './core/core';
import { randFirstName } from './first-name';
import { randDomainSuffix } from './domain-suffix';
import { randBoolean } from './boolean';
import { randFullName } from './full-name';
import { randNumber } from './number';

const emailProviders = ['gmail', 'yahoo', 'hotmail', 'unaref'];

function randEmailProvider() {
  return fake(emailProviders);
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
 */
export function randEmail<Options extends FakeOptions>(options?: Options) {
  return fake(() => {
    let name = randBoolean()
      ? randFirstName()
      : randFullName().replace(' ', fake(['.', '_']));

    if (randBoolean()) {
      name += randNumber({ min: 1, max: 1_000 });
    }

    return `${name}@${randEmailProvider()}.${randDomainSuffix()}`;
  }, options);
}
