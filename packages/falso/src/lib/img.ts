import { fake, FakeOptions } from './core/core';

interface ImgOptions extends FakeOptions {
  width?: number;
  height?: number;
  category?: Category;
}

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
 */
export function randImg<Options extends ImgOptions = never>(options?: Options) {
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
