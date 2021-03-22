export default function genericsAdvancedSample() {
  // map method signature
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[];

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };

  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => +item);
  console.log('genericsAdvancedSample 01', numbers);

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      result[i] = fn(item);
    }
    return result;
  };

  const strings = mapNumbersToStrings(numbers, (item) => item.toString());
  console.log('genericsAdvancedSample 02', strings);
}
