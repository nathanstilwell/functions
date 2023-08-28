import { toNumerals, fromNumerals, NumeralSet } from "./numerals";

/* Roman Numerals */
type RomanNumerals = "I" | "IV" | "V" | "IX" | "X" | "XL" | "L" | "XC" | "C";
const romu: NumeralSet<RomanNumerals> = {
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

describe("numerals", () => {
  const toRomu = (num: number) => toNumerals(num, romu, []);
  const fromRomu = (num: string) => fromNumerals(num, romu);
  test("toNumerals converts decimal numbers to numerals", () => {
    expect(toRomu(1)).toBe("I");
    expect(toRomu(4)).toBe("IV");
    expect(toRomu(156)).toBe("CLVI");
  });

  test("fromNumerals converts a numeral string to a decimal number", () => {
    expect(fromRomu("")).toBe(0);
    expect(fromRomu("I")).toBe(1);
    expect(fromRomu("CLVI")).toBe(156);
  });
});
