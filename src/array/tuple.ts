export default function tupleSample() {
  // basic tuple types
  const response: [number, string] = [200, 'OK'];
  // response = [400, 'Bad Request', 'Email parameter is missing']
  // response = ['400', 'Bad Request', '']
  console.log('tupleSample 01', response);

  // rest tuple types
  const girlfriends: [string, ...string[]] = ['Kana', 'Miku', 'Keiko'];
  girlfriends.push('Misa');
  console.log('tupleSample 02', girlfriends);
}
