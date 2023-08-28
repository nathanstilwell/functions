export type NumeralSet<T extends string> = Record<T, number>;

export const toNumerals = <T extends string>(
  num: number,
  numerals: NumeralSet<T>,
  numeralAccumulator: string[] = [],
) => {
  if (numerals === undefined) {
    throw new Error(
      "Numeral set undefined. A base set of numerals must be supplied",
    );
  }
  if (num < 0) {
    return toNumerals(Math.abs(num), numerals, ["-", ...numeralAccumulator]);
  }

  const next = Object.keys(numerals).find((n) => Math.floor(num / numerals[n]));

  if (next) {
    return toNumerals(num - numerals[next], numerals, [
      ...numeralAccumulator,
      next,
    ]);
  }

  return numeralAccumulator.join("");
};

export const fromNumerals = <N>(numeralString: string, numeralSet: N) => {
  if (numeralString === "") {
    return 0;
  }

  return numeralString
    .split("")
    .reduce<number>((acc, numeral) => (acc += numeralSet[numeral] ?? 0), 0);
};
