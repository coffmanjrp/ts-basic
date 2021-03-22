export default function unknownSample() {
  const maybeNumber: unknown = 10;
  console.log('unknownSample 01', typeof maybeNumber, maybeNumber);

  const isFoo = maybeNumber === 'foo';
  console.log('unknownSample 02', typeof isFoo, isFoo);

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10;
    console.log('unknownSample 03', typeof sum, sum);
  }
}
