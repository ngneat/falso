import { fake, FakeOptions } from './core/core';
import { data } from './book.json';

interface BookOptions extends FakeOptions {
  category?:
    | 'Comedy'
    | 'Crime'
    | 'Family and Self'
    | 'Love'
    | 'Science Fiction and Fantasy'
    | 'State of the Nation'
    | 'War and Travel';
}

export interface Book {
  title: string;
  author: string;
  category: BookOptions['category'];
}

/**
 * Generate a random book.
 *
 * @category entities
 *
 * @example
 *
 * randBook()
 *
 * @example
 *
 * randBook({ length: 10 })
 *
 * @example
 *
 * randBook({ category: 'Comedy' })
 *
 */
export function randBook<Options extends BookOptions = never>(
  options?: Options
) {
  const bookData = options?.category
    ? (data as Book[]).filter(({ category }) => category === options.category)
    : (data as Book[]);

  return fake(bookData, options);
}
