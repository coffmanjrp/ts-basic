export default function notExistsSample() {
  let name = null;
  console.log(typeof name, name);

  name = 'JR';

  if (name) {
    console.log(name);
  } else {
    console.log('No name');
  }

  let age = undefined;
  console.log(typeof age, age);

  age = 30;

  if (age) {
    console.log(`${age} years old`);
  } else {
    console.log('Age is secret');
  }
}
