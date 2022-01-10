type Options = {
  min?: number;
  max?: number;
  fractions?: number;
};

export function randomFloat({ min, max, fractions }: Options = {}) {
  const [minValue, maxValue, fractionValue] = [
    min ?? 1.0,
    max ?? 9999.99,
    fractions ?? 2,
  ];
  return Number(
    (Math.random() * (maxValue - minValue) + minValue).toFixed(fractionValue)
  );
}
