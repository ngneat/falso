import { fake, FakeOptions } from './core/core';

type Category = 'animals' | 'arch' | 'nature' | 'people' | 'tech';

/**
 * Generate a random img.
 *
 * @category General
 *
 * @example
 *
 * randImg()
 *
 * @example
 *
 * randImg({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * https://placeimg.com/500/500
 * https://placeimg.com/500/500
 * https://placeimg.com/500/500
 */

export function randImg<
  Options extends FakeOptions & {
    width?: number;
    height?: number;
    category?: Category;
  } = never
>(options?: Options) {
  const [width, height, category] = [
    options?.width ?? 500,
    options?.height ?? 500,
    options?.category ?? '',
  ];

  return fake(
    () =>
      `https://placeimg.com/${width}/${height}${
        category ? `/${category}` : category
      }`,
    options
  );
}
