export default function notExistsSample() {
  let name = null;
  console.log('notExistsSample 01', typeof name, name);

  name = 'JR';

  if (name) {
    console.log('notExistsSample 02', name);
  } else {
    console.log('notExistsSample 02', 'No name');
  }

  let age = undefined;
  console.log('notExistsSample 03', typeof age, age);

  age = 30;

  if (age) {
    console.log('notExistsSample 04', `${age} years old`);
  } else {
    console.log('notExistsSample 04', 'Age is secret');
  }
}
