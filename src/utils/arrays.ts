export const split = <T = any>(size: number, array: T[]): T[][] =>
  array.length ? [array.slice(0, size), ...split(size, array.slice(size))] : [];
