import { randomFloat } from './random-float';

type RGBOptions = {
  alpha: boolean;
};

function randomValue() {
  return Math.floor(Math.random() * (255 + 1));
}

export function rgb({ alpha }: RGBOptions = { alpha: false }) {
  const [r, g, b, a] = [
    randomValue(),
    randomValue(),
    randomValue(),
    randomFloat({ min: 0.1, max: 1 }),
  ];
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}
