// function with optional parameter
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('functionParameters 01', `User is signed in. User name is ${username}`);
    return true;
  } else {
    console.log('functionParameters 02', 'User is not signed in.');
    return false;
  }
};

// function with default parameter
export const isUserSignedInTwo = (userId: string, username = 'Anonymous'): boolean => {
  if (userId === 'ABC') {
    console.log('functionParameters 03', `User is signed in. User name is ${username}`);
    return true;
  } else {
    console.log('functionParameters 04', 'User is not signed in.');
    return false;
  }
};

// function with rest parameters
export const sumProductsPrice = (...productPrice: number[]): number => {
  return productPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  }, 0);
};
