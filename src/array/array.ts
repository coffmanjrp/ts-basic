export default function arraySample() {
  // basic array types
  const colors: string[] = ['red', 'blue'];
  colors.push('yellow');
  // colors.push(123)
  console.log('arraySample 01', colors);

  const even: Array<number> = [2, 4, 6];
  even.push(8);
  // even.push('10')
  console.log('arraySample 02', even);

  // array union types
  const ids: (string | number)[] = ['ABC', 123];
  ids.push('DEF');
  ids.push(456);
  // ids.push(true)
  console.log('arraySample 03', ids);

  // type inference of array types
  const generateSomeArray = () => {
    const _someArray = []; // any[]
    _someArray.push(123); // number[]
    _someArray.push('ABC'); // (string | number)[]
    return _someArray;
  };

  const someArray = generateSomeArray();
  someArray.push(456);
  // someArray.push(true)
  console.log('arraySample 04', someArray);

  // immutable array types
  const commands: readonly string[] = ['git add', 'git commit', 'git push'];
  // commands.push('git fetch')
  // commands[2] = 'git pull'
  console.log('arraySample 05', commands);
}
