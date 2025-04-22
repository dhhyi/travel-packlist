const max = 400;

export function colorFromString(str: string): string {
  const num = (hashStringToNumber(str) * 360) / max;
  return `hsl(${num.toString()}, 50%, 50%)`;
}

function hashStringToNumber(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char; // Simple hash algorithm
    hash |= 0; // Convert to 32-bit integer
  }
  return (Math.abs(hash) % max) + 1;
}
