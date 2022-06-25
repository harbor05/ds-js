/**
 * @class Back Tracking (퇴각 검색)
 *
 * @description
 * Maze problem with Back tracking
 */
class BackTracking {
  mazeArray = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
  ]; // Maze structure in Array

  mazeVisitedArray = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ]; // Visited maze with Array - Array.from(Array(5), () => Array(8).fill(false));

  isFinished = false;
  END_X = 7;
  END_Y = 3;
  START_X = 0;
  START_Y = 1;
  WALL = 1;

  /**
   * move - 조건이 만족하는 모든 경우의 수 검색
   * @description
   * 재귀적으로 사용
   * @param {Number} x - [Maze] X coordinate
   * @param {Number} y - [Maze] Y coordinate
   */
  move(x, y) {
    let isArrived = x === this.END_X && y === this.END_Y; // 목적지에 도착했을 경우
    let isVisited = this.mazeVisitedArray[y][x]; // 방문한 곳인 경우
    let isBlocked = this.mazeArray[y][x] === this.WALL; // 벽에 막힌 경우
    let isEnabled =
      x < 0 ||
      y < 0 ||
      this.mazeArray[y].length - 1 < x ||
      this.mazeArray.length - 1 < y; // 미로를 벗어나는 않는 경우

    if (this.isFinished) {
      return; // 길을 찾았을 경우 최초에 검색 중단
    } else if (isArrived) {
      this.visit(x, y);
      this.isFinished = true;
      return;
    } else if (isEnabled) {
      return;
    } else if (isBlocked) {
      return;
    } else if (isVisited) {
      return;
    }

    this.visit(x, y);

    this.move(x + 1, y); // 오른쪽 이동
    this.move(x, y + 1); // 아래쪽 이동
    this.move(x - 1, y); // 왼쪽 이동
    this.move(x, y - 1); // 위쪽 이동
  }

  /**
   * escape - Maze begins from starting point
   */
  escape() {
    this.move(this.START_X, this.START_Y);
  }

  /**
   * visite - 방문 처리를 위한 함수
   * @param {Number} x - [Visted Array] X coordinate
   * @param {Number} y - [Visted Array] Y coordinate
   * @return {Boolean} 방문 여부 반환
   */
  visit(x, y) {
    this.mazeVisitedArray[y][x] = true;
    console.log("Visited at", x, y);
  }
}

let mazeProblem = new BackTracking();

mazeProblem.escape();
