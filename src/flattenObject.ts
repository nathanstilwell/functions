export const flattenObject = (data: Record<string, unknown> | Array<unknown>, prefix?: string, accumulator = {}) => {
  const objectReducer = (acc: object, element: string) => {
    const key = prefix ? `${prefix}.${element}` : element;
    const value = data[element];

    if (value === null) {
      return {
        ...acc,
        [key]: value,
      };
    }

    if (typeof value === "object") {
      return {
        ...acc,
        ...flattenObject(value, key, acc),
      };
    }

    return {
      ...acc,
      [key]: value,
    };
  };

  if (typeof data !== "object" || data === null) {
    return null;
  }

  return Object.keys(data).reduce(objectReducer, accumulator);
};
