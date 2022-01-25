import { fake, FakeOptions } from './core/core';
import { data } from './super-hero.json';
import { rand, randUuid } from '@ngneat/falso';

export type ComicBookCompany = 'Marvel' | 'DC';

export interface SuperHeroOptions extends FakeOptions {
  company?: ComicBookCompany;
}

export interface SuperHero {
  id?: string;
  realName: string;
  alterEgo: string;
  company: string;
}

export interface SuperHeroEntity extends SuperHero {
  id: string;
}

export function randSuperHero<Options extends SuperHeroOptions>(
  options?: Options
) {
  const filteredData: SuperHeroEntity[] = data
    .filter((hero) =>
      options?.company ? hero.company === options.company : true
    )
    .map((hero: SuperHero) => {
      return {
        ...hero,
        id: randUuid(),
      };
    });

  return fake(filteredData, options);
}

export function randSuperHeroName<Options extends SuperHeroOptions>(
  options?: Options
) {
  const factory: () => string = () => {
    const heroes = data
      .filter((hero: SuperHero) =>
        options?.company ? hero.company === options.company : true
      )
      .map((hero: SuperHero) => hero.alterEgo);

    return rand(heroes);
  };

  return fake(factory, options);
}
