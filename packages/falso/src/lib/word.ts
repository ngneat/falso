import { FakeOptions, fake, rand } from './core';
import { data } from './word.json';

export interface WordOptions extends FakeOptions {
  capitalize?: boolean;
}

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function word<Options extends WordOptions>(options?: Options) {
  const factory = () => {
    let word = rand(data);

    if (options?.capitalize) {
      word = capitalizeFirstLetter(word);
    }

    return word;
  };

  return fake(factory, options);
}
