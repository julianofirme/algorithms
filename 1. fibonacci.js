function getFibonacciSequence(fibonacciSize) {
  return new Array(fibonacciSize).fill(1).reduce((fibonacciValues, _, index) => {
    fibonacciValues.push((index <= 1) ? index : fibonacciValues[index - 2] + fibonacciValues[index - 1])
    return fibonacciValues
  }, []);
}
console.log(getFibonacciSequence(10))