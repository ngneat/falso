import { FakeOptions, fake } from './core/core';
import { randUser, User } from './user';
import { randUuid } from './uuid';
import { randText } from './text';
import { randNumber } from './number';

export interface Post {
  id: string;
  title: string;
  body: string;
  comments: Array<{ id: string; text: string; user: User }>;
}

/**
 * Generate a random post.
 *
 * @category entities, internet
 *
 * @example
 *
 * randPost()
 *
 * @example
 *
 * randPost({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randPost<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    const post: Post = {
      id: randUuid(),
      title: randText({ charCount: 40 }),
      body: randText({ charCount: 500 }),
      comments: Array.from({ length: randNumber({ min: 1, max: 5 }) }, () => {
        return {
          id: randUuid(),
          text: randText({ charCount: 100 }),
          user: randUser(),
        };
      }),
    };

    return post;
  }, options);
}
