import World from './world';
import { primitiveSample, notExistsSample, anySample, unknownSample } from './basic';

const root = document.getElementById('root');
const world = new World('Hello, World!');

world.sayHello(root);

primitiveSample();
notExistsSample();
anySample();
unknownSample();
