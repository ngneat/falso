type RGBOptions = {
  alpha: boolean;
};

type RandomFloatOptions = {
  min: number;
  max: number;
};

function randomValue() {
  return Math.floor(Math.random() * (255 + 1));
}

function randomFloat({ min, max }: RandomFloatOptions) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
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
