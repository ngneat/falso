import { randomFloat } from './random-float';
import { fake, FakeOptions } from './core';

export interface RGBOptions extends FakeOptions {
  alpha?: boolean;
}

function randomValue() {
  return Math.floor(Math.random() * (255 + 1));
}
// TODO getRandomInRange
export function rgb<Options extends RGBOptions>(options?: Options) {
  const factory = () => {
    const [r, g, b, a] = [
      randomValue(),
      randomValue(),
      randomValue(),
      randomFloat({ min: 0.1, max: 1 }),
    ];

    return options?.alpha
      ? `rgba(${r}, ${g}, ${b}, ${a})`
      : `rgb(${r}, ${g}, ${b})`;
  };

  return fake(factory, options);
}
