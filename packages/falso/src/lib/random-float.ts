type Options = {
  min: number;
  max: number;
  fractions?: number;
};

export function randomFloat(
  { min, max, fractions }: Options = { min: 1.0, max: 999.99 }
) {
  return Number((Math.random() * (max - min) + min).toFixed(fractions ?? 2));
}
