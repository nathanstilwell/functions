# flattenObject

**`flattenObject (data: any, prefix?: string, accumulator = {})`**

`flattenObject` takes an object with nested properties and return an object with properties only a single level deep. The returned object will have property keys equal to the path of the nested values.

**Arguments**
**`data: any`** - An Object
**`prefix?: string`** - a string to prefix the properties of the returned Object.
**`accumulator?: Object`** - an Object to assign the data object too

### Example

```ts
const deepObject = {
  foo: 1,
  bar: {
    baz: "two",
    bim: [4, 5, 6, 7],
    boo: [{
      bip: 2,
      bic: 3,
    }, {
      boz: 8,
      box: 9,
    }],
  }
}

const flatObject = flattenObject(deepObject);
/**
  {
    foo: 1,
   'bar.baz': 'two',
   'bar.bim.0': 4,
   'bar.bim.1': 5,
   'bar.bim.2': 6,
   'bar.bim.3': 7,
   'bar.boo.0.bip': 2,
   'bar.boo.0.bic': 3,
   'bar.boo.1.boz': 8,
   'bar.boo.1.box': 9
 }
 */
```
