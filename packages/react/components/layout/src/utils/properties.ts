export const extractSprinkleProps = <T extends unknown>(props: T, keys: Array<keyof T>) => {
  const result: any = {};

  keys.forEach(key => {
    if (props?.[key]) {
      result[key] = props[key];
    }
  });

  return result;
};
