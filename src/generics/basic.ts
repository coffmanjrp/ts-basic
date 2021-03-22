export default function genericsBasicSample() {
  const stringReduce = (array: string[], initialValue: string): string => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 01', stringReduce(['May ', 'the ', 'force ', 'be ', 'with ', 'you'], ''));

  const numberReduce = (array: number[], initialValue: number): number => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 02', numberReduce([100, 200, 300, 400, 500], 1000));

  type GenericReduce<T> = {
    (array: T[], initialValue: T): T;
  };

  const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 03', genericStringReduce(['MAKE ', 'TYPESCRIPT ', 'GREAT ', 'AGAIN'], ''));

  const genericNumberReduce: GenericReduce<number> = (array, initialValue) => {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result;
  };
  console.log('genericsBasicSample 04', genericNumberReduce([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0));

  type GenericReduceTwo = {
    <T>(array: T[], initialValue: T): T;
    <U>(array: U[], initialValue: U): U;
  };

  type GenericReduceThree<T> = (array: T[], initialValue: T) => T;
  type GenericReduceFour = <T>(array: T[], initialValue: T) => T;
}
