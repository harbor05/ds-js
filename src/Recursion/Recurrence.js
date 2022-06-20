/**
 * Recurrence(점화식)
 * 1. Sigma(반복순차)
 * 2. Fibonacci sequence(반복순차 / 분할병합)
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
    console.log(n, sum);
    if (n > 10) {
      // 10일 경우 중단
      return sum;
    }

    let currSum = n === 1 ? this.init(n) : sum + this.init(n);
    console.log("currSum:", currSum);
    return this.sigma(n + 1, currSum);
  }
}

let runSigma = new Recurrence();
console.log("Sigma result:", runSigma.sigma((1, 1)));
