export const flattenObject = (data: any, prefix?: string, accumulator = {}) => {
  const objectReducer = (acc: object, element: string) => {
    const key = (prefix) ? `${prefix}.${element}` : element;
    const value = data[element];

    if (value === null) {
   		return {
        ...acc,
        [key]: value,
      }
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
  }

  return Object.keys(data).reduce(objectReducer, accumulator);
}


