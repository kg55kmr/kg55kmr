export function toPercent(count: number, total: number) {
  return Math.trunc((count / total) * 100);
}
