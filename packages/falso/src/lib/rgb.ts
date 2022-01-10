function randomValue() {
  return Math.floor(Math.random() * (255 + 1));
}

function randomFloat(min: number, max: number) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

export function rgb(alpha = false) {
  const [r, g, b, a] = [
    randomValue(),
    randomValue(),
    randomValue(),
    randomFloat(0.1, 1),
  ];
  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return `rgb(${r}, ${g}, ${b})`;
}
