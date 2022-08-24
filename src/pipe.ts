export const pipe =
<ArgType>(...functions: Array<(arg: ArgType) => ArgType>) =>
  (x: ArgType) =>
    functions.reduce((acc, fn) => fn(acc), x);
