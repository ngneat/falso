type Options = {
  min?: number;
  max?: number;
  fraction?: number;
};

export function randomFloat({ min, max, fraction }: Options = {}) {
  const [minValue, maxValue, fractionValue] = [
    min ?? 1.0,
    max ?? 9999.99,
    fraction ?? 2,
  ];
  return Number(
    (Math.random() * (maxValue - minValue) + minValue).toFixed(fractionValue)
  );
}
