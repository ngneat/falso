import { fake, FakeOptions } from './core/core';

interface ImgOptions extends FakeOptions {
  width?: number;
  height?: number;
  grayscale?: boolean;
}

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
 * @example
 *
 * randImg({ width: 300 }) // default is "height" or 500 (if not set either)
 *
 * @example
 *
 * randImg({ height: 200 }) // default is "width" or 500 (if not set either)
 *
 * @example
 *
 * randImg({ grayscale: true }) // return a grayscale image (default is false)
 *
 */
export function randImg<Options extends ImgOptions = never>(options?: Options) {
  const [width, height, grayscale] = [
    options?.width ?? options?.height ?? 500,
    options?.height ?? options?.width ?? 500,
    options?.grayscale ?? false,
  ];

  return fake(
    () =>
      `https://picsum.photos/${width}/${height}${
        grayscale ? '?grayscale' : ''
      }`,
    options
  );
}
