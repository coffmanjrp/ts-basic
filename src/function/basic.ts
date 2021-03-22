// arrow function
export const logMessage = (message: string): void => {
  console.log('functionBasic 01', message);
};

// function declaration
export function logMessageTwo(message: string): void {
  console.log('functionBasic 02', message);
}

// function expression
export const logMessageThree = function (message: string): void {
  console.log('functionBasic 03', message);
};

// shorter way of arrow function
export const logMessageFour = (message: string): void => console.log('functionBasic 04', message);

// never type
export const alwaysThrowError = (message: string): never => {
  throw new Error(message);
};

// type signature
type FullLogMessage = {
  (message: string): void;
};
export const logMessageSix: FullLogMessage = (message) => {
  console.log('functionBasic 06', message);
};

// type signature (shorter way)
type ShortLogMessage = (message: string) => void;
export const logMessageSeven: ShortLogMessage = (message) => {
  console.log('functionBasic 07', message);
};
