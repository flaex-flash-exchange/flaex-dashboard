const groupByAndCount = (arr:any[],key: string) => arr.reduce((total, currentValue) => {
    const value = currentValue[key];
    // eslint-disable-next-line no-prototype-builtins
    if (!total.hasOwnProperty(value as string)) {
      total[value] = { ...currentValue, quantity: 1 };
      return total;
    }
    total[value] = { ...(total[value]), quantity: total[value].quantity + 1 };
    return total;
  }, {});

export default groupByAndCount;