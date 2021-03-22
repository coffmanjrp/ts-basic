export default function primitiveSample() {
  const name = 'JR';
  console.log('primitiveSample 01', typeof name, name);

  const age = 30;
  console.log('primitiveSample 02', typeof age, age);

  const isSingle = true;
  console.log('primitiveSample 03', typeof isSingle, isSingle);

  const isOver20: boolean = age >= 20;
  console.log('primitiveSample 04', typeof isOver20, isOver20);
}
