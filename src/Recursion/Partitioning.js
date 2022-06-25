/**
 * @class Partitioning (재귀의 분할 관점)
 *
 */
class Partitioning {
  /**
   * 배열의 합
   * @param {Array<number>} arr - Initial / Recurrence Array
   * @param {Number} startIndex - Initial / Recurrence start index
   * @param {Number} endIndex - Initial / Recurrence end index
   * @returns {Number} sum result
   */
  sum(arr, startIndex, endIndex) {
    if (startIndex === endIndex) {
      return arr[startIndex];
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2); // 중앙값
    let leftSum = this.sum(arr, startIndex, middleIndex); // 분할 관점의 왼쪽 값
    let rightSum = this.sum(arr, middleIndex + 1, endIndex); // 분할 관점의 오른쪽 값

    return leftSum + rightSum;
  }

  /**
   * 배열의 최댓값
   * @param {Array<number>} arr - Initial / Recurrence Array
   * @param {Number} startIndex - Initial / Recurrence start index
   * @param {Number} endIndex - Initial / Recurrence end index
   * @returns {Number} max result
   */
  max(arr, startIndex, endIndex) {
    if (startIndex === endIndex) {
      return arr[startIndex];
    }

    let middleIndex = Math.floor((startIndex + endIndex) / 2); // 중앙값
    let leftMax = this.max(arr, startIndex, middleIndex); // 분할 관점의 왼쪽 값
    let rightMax = this.max(arr, middleIndex + 1, endIndex); // 분할 관점의 오른쪽 값

    return Math.max(leftMax, rightMax);
  }
}

let partitioning = new Partitioning();

const sumArray = [4, 2, 5, 1, 5, 3, 1, 2];
console.log("Sum result:", partitioning.sum(sumArray, 0, sumArray.length - 1));

const maxArray = [2, 1, 6, 7, 5, 8, 3, 4];
console.log("Max result:", partitioning.max(maxArray, 0, maxArray.length - 1));
