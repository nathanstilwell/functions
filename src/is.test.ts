import { is } from "./is";

describe("is function", () => {
  test("compares the types", () => {
    expect(is({}, "object")).toBe(true);
    expect(is([], "object")).toBe(true);
    expect(is(new Date(), "object")).toBe(true);
    expect(is(3, "number")).toBe(true);
    expect(is(NaN, "number")).toBe(true);
    expect(is(Infinity, "number")).toBe(true);
    expect(is(Symbol(), "symbol")).toBe(true);
    expect(is(undefined, "undefined")).toBe(true);
    expect(is(false, "boolean")).toBe(true);
    expect(is(new Boolean(true), "object")).toBe(true);
    expect(is(new Number(3), "object")).toBe(true);
  });
});
