# pipe

**`pipe <ArgType>(...functions: Array<(arg: ArgType) => ArgType>) => ArgType`**

`pipe` is a variadic function that takes functions of the same airity and composes them from left to right. The type of the function arguments and thier return type are meant to be the same.

### Example

```ts
const add = (b) => (a) => a + b;
const sub = (b) => (a) => a - b;
const mul = (b) => (a) => a * b;

// (((10 + 5) - 2) * 3) === 39
pipe(add(5), sub(2), mul(3))(10);
```
