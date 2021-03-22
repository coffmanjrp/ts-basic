import World from './world';
import { primitiveSample, notExistsSample, anySample, unknownSample } from './basic';
import { logMessage } from './function/basic';
import { isUserSignedIn, isUserSignedInTwo, sumProductsPrice } from './function/parameters';
import { objectSample, typeAliasSample } from './object';

const root = document.getElementById('root');
const world = new World('Hello, World!');

world.sayHello(root);

primitiveSample();
notExistsSample();
anySample();
unknownSample();

logMessage('Hello typescript!');
isUserSignedIn('ABC', 'JR');
isUserSignedIn('DEF');
isUserSignedInTwo('ABC');
const sum = sumProductsPrice(100, 200, 300, 400, 500);
console.log('functionParameters 05', sum);

objectSample();
typeAliasSample();
