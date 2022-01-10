function randomValue() {
  return Math.floor(Math.random() * (255 + 1));
}

export function rgb() {
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`;
}
