# is

**is (obj: unknown, type: string) => boolean**

`is` is a tiny utility function for checking the _typeof_ a variable. Given a value and the expected `typeof` string value, it will return a boolean based on the matching output of the `typeof` evaluation.

### Example

```ts

is({}, "object"); // true
is(NaN, "number"); // true
is(3, "string"); // false
```
