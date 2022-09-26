import { flattenObject } from "./flattenObject";

const testObj = {
  foo: 1,
  bar: "two",
  baz: {
    bim: true,
    boo: [4, 5, 6, 7],
    blur: [
      { key: "thing1", label: "Thing 1" },
      { key: "thing2", label: "Thing 2" },
      {
        deep: {
          foo: 1,
          bar: "two",
          bim: [1, 2, 3, 4],
        },
      },
    ],
  },
  ban: null,
  bax: {
    fee: "a23jfd8ad000a",
    fi: {
      fo: 333,
      fum: null,
    },
  },
};

describe("flattenObject", () => {
  test("flattens an object", () => {
    const expected = {
      foo: 1,
      bar: "two",
      "baz.bim": true,
      "baz.boo.0": 4,
      "baz.boo.1": 5,
      "baz.boo.2": 6,
      "baz.boo.3": 7,
      "baz.blur.0.key": "thing1",
      "baz.blur.0.label": "Thing 1",
      "baz.blur.1.key": "thing2",
      "baz.blur.1.label": "Thing 2",
      "baz.blur.2.deep.foo": 1,
      "baz.blur.2.deep.bar": "two",
      "baz.blur.2.deep.bim.0": 1,
      "baz.blur.2.deep.bim.1": 2,
      "baz.blur.2.deep.bim.2": 3,
      "baz.blur.2.deep.bim.3": 4,
      ban: null,
      "bax.fee": "a23jfd8ad000a",
      "bax.fi.fo": 333,
      "bax.fi.fum": null,
    };

    const result = flattenObject(testObj);
    expect(result).toEqual(expected);
  });

  test("returns null if object is invalid", () => {
    expect(flattenObject(undefined)).toBe(null);
    expect(flattenObject(null)).toBe(null);
    expect(flattenObject("test")).toBe(null);
    expect(flattenObject(Infinity)).toBe(null);
  });

  test("returns object if already flat or empty", () => {
    const testObj = {
      foo: 1,
      bar: 2,
    };

    expect(flattenObject(testObj)).toEqual(testObj);
    expect(flattenObject({})).toEqual({});
  });

});
