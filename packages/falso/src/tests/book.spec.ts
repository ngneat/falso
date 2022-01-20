import { randBook } from '../lib/book';

describe('book', () => {
  it('should retrieve a book', () => {
    const book = randBook();

    expect(typeof book.title).toEqual('string');
    expect(typeof book.author).toEqual('string');
    expect(typeof book.category).toEqual('string');
  });

  it('should retrieve a book from a specific category', () => {
    const category = 'Science Fiction and Fantasy';
    const book = randBook({ category });

    expect(book.category).toEqual(category);
  });
});
