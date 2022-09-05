/**
 * @class Bouncing ball with Recurrence
 */
class BouncingBall {
  /**
   * Get total distance of bouncing ball
   *
   * @description
   * height is decrease half of previous height
   * @param {Number} h - Initial height / Recurrence height
   * @param {Number} currentSum - Initial distance / Recurrence distance
   * @returns {Number} Total bouncing distance
   */
  getTotalDistance(h, currentSum) {
    console.log("------bouncing------", h, currentSum);

    if (h < 1) {
      console.log("------ground------", currentSum);
      return currentSum;
    }

    // 공이 다시 왕복하면서 튕기기 때문에 * 2 로 Bouncing distance 증가
    let bouncingDistance = currentSum === 0 ? h : h * 2;
    console.log("Bouncing Distance", bouncingDistance);

    let totalDistance = bouncingDistance + currentSum;
    console.log("Total Distance", totalDistance);

    return this.getTotalDistance(Math.floor(h / 2), totalDistance);
  }
}

let bouncingBall = new BouncingBall();
console.log("Bouncing Ball Result:", bouncingBall.getTotalDistance(16, 0));
