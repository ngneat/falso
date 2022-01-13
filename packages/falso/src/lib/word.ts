import { FakeOptions, fake, rand } from './core';
import { data } from './word.json';

export interface WordOptions {
  capitalise?: boolean;
}

function capitaliseFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function word<Options extends FakeOptions>(options?: Options) {
  const factory = () => {
    let word = rand(data);

    if (options?.capitalise) {
      word = capitaliseFirstLetter(word);
    }

    return word;
  };

  return fake(factory, options);
}
