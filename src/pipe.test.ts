import { pipe } from "./pipe";

describe("pipe function", () => {
  test("composes functions from left to right", () => {
    const fn1 = jest.fn(x => `${x}, fn1`);
    const fn2 = jest.fn(x => `${x}, fn2`);
    const fn3 = jest.fn(x => `${x}, fn3`);

    const result = pipe<string>(fn1, fn2, fn3)("init");

    expect(fn1.mock.calls[0][0]).toBe("init");
    expect(fn1.mock.results[0].value).toBe("init, fn1");
    expect(fn2.mock.calls[0][0]).toBe("init, fn1");
    expect(fn2.mock.results[0].value).toBe("init, fn1, fn2");
    expect(fn3.mock.calls[0][0]).toBe("init, fn1, fn2");
    expect(fn3.mock.results[0].value).toBe("init, fn1, fn2, fn3");
    expect(result).toBe("init, fn1, fn2, fn3");
  })
});
