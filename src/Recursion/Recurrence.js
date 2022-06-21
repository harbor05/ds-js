/**
 * Recurrence(점화식)
 * 1. Sigma(반복순차)
 * 2. Fibonacci sequence(반복순차 / 분할정복)
 * [22.06.21] in progress
 */
class Recurrence {
  /**
   * Init function for Recurrence concept
   * @param {Number} n
   * @return {Number} n
   */
  init(n) {
    return n;
  }

  /**
   * sigma function
   * @param {Number} n init number
   * @param {Number} sum sum number
   * @returns {Function | Number} recurrence or sum result
   */
  sigma(n, sum) {
    console.log("sigma", n, sum);
    if (n > 6) {
      return sum;
    }

    let currSum = n === 1 ? this.init(n) : sum + this.init(n);
    console.log("currSum:", currSum);
    return this.sigma(n + 1, currSum);
  }

  /**
   * Fibonacci recurrence
   * @param {Number} n
   * @param {Number} twoPrevValue
   * @param {Number} onePrevValue
   * @returns {Number} nth result
   */
  fibonacciRecurr(n, twoPrevValue, onePrevValue) {
    console.log("fibonacciRecurr", n, twoPrevValue, onePrevValue);
    if (n > 6) {
      return onePrevValue;
    }

    let value = n === 1 || n === 2 ? 1 : twoPrevValue + onePrevValue;
    return this.fibonacciRecurr(n + 1, onePrevValue, value);
  }

  /**
   * Fibonacci Divide and Conquer
   * @param {Number} n
   * @returns {Number} nth result
   */
  fibonacciDivConq(n) {
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacciDivConq(n - 1) + this.fibonacciDivConq(n - 2);
  }

  /**
   * Combination
   * @param {Number} n
   * @param {Number} r
   * @returns {Number} combination result
   */
  combination(n, r) {
    if (r === 0 || n === r) {
      return 1;
    }

    return this.combination(n - 1, r - 1) + this.combination(n - 1, r);
  }
}

let runSigma = new Recurrence();
console.log("Sigma result:", runSigma.sigma((1, 1)));

let runFibonacciRecurr = new Recurrence();
console.log(
  "runFibonacciRecurr result:",
  runFibonacciRecurr.fibonacciRecurr((1, 1, 1))
);

let runFibonacciDivConq = new Recurrence();
console.log(
  "runFibonacciDivConq result:",
  runFibonacciDivConq.fibonacciDivConq(6)
);

let runCombination = new Recurrence();
console.log("runCombination result:", runCombination.combination(5, 3));
