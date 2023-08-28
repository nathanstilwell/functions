# Fun with numerals

A numeral is a symbol that stands for a number. The most famous numeral set are Roman numerals, but the following functions will take any _NumeralSet_ to convert to or from.

### Types
```ts
type NumeralSet<T extends string> = Record<T, number>;
```

`T` is generic so a union type can be used as keys in the `NumeralSet`. For example,

```ts
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
```

## toNumeral

**`toNumeral(number: number, numerals: NumeralSet, numeralAccumulator: string[] = [])`**

`toNumeral` takes a number and a numeral set and will output a string representing that number value in the numeral set. The `numeralAccumulator` is an accessory paramet used for internal recursion,

### Examples
```ts
const someRomanNumerals: NumeralSet = [
  { label: "X", value: 10 },
  { label: "IX", value: 9 },
  { label: "V", value: 5 },
  { label: "IV", value: 4 },
  { label: "I", value: 1 },
];

toNumerals(29, someRomanNumerals); // "XXIX"
toNumerals(17, someRomanNumerals); // "XVII"
```

A more convinient usage of this function would be to partially apply the set of numerals. For example,

```ts
const toRomanNumerals = (num: number) => toNumerals(num, romanNumerals);
```

## fromNumerals

`fromNumerals` takes a string of numerals symbols and converts the symbols using the numeral set supplied to calculate a decimal number.

### Examples

```ts
fromNumerals("XXIX", someRomanNumerals); // 29
fromNumerals("XVII", someRomanNumerals); // 17
```
