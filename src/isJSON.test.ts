import { isJson } from "./isJSON";

describe("isJson function", () => {
  test("can parse JSON", () => {
    const json = `{
      "foo": "bar"
    }`;

    expect(isJson(json)).toBe(true);
  });

  test("can tell what isn't JSON", () => {
    const notJSON = `{ foo: "bar"; }`;
    expect(isJson(notJSON)).toBe(false);
  });
});
