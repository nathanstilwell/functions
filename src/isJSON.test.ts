import { isJson } from "./isJSON";

describe("isJson function", () => {
  test("can parse JSON", () => {
    const json = `{
      "foo": "bar"
    }`;

    expect(isJson(json)).toBe(true);
  });
});
