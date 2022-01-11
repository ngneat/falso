export function between({ from, to }: { from: Date; to: Date }): Date {
  if (from.getTime() >= to.getTime()) {
    throw new Error('from must be before to');
  }

  return new Date(
    Math.floor(Math.random() * (to.getTime() - from.getTime())) + from.getTime()
  );
}
