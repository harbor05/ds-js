/**
 * Create Matrix Util
 *
 * @param {Number} rows
 * @param {Number} columns
 * @returns {Array} Matrix
 */
function createMatrix(rows, columns) {
  let array = new Array(rows);
  for (let i = 0; i < rows; i += 1) {
    array[i] = new Array(columns);
  }
  return array;
}

/**
 * @class Adjacency Matrix
 *
 * 그래프 구현 (인접 행렬)
 * V(Vertex) - 정점의 집합
 * E(Edge) - 간선의 집합
 * G(Graph) = (V,E)
 */
class AdjacencyMatrix {
  constructor(size) {
    this.graph = createMatrix(size, size);
    this.size = size;
  }

  /**
   * 무방향
   * @description
   * 인접 여부를 1로 표현
   * @example
   * (0, 2) => matrix[0][2] = 1
   * (2, 0) => matrix[2][0] = 1
   * @param {Number} u
   * @param {Number} v
   * @return {Function} _addUndirectedEdge
   */
  addUndirectedEdge(u, v) {
    this._addUndirectedEdge(u, v, 1);
  }

  /**
   * @example
   * (0, 1) => martrix[0, 1] = 2
   * @param {Number} w 가중치
   */
  _addUndirectedEdge(u, v, w) {
    this.graph[u][v] = w;
    this.graph[v][u] = w;
  }

  /**
   * 방향
   * @example
   * (0, 2) => matrix[0][2] = 1
   * @param {Number} u
   * @param {Number} v
   * @return {Function} _addDirectEdge
   */
  addDirectEdge(u, v) {
    this._addDirectEdge(u, v, 1);
  }

  /**
   *
   * @param {Number} w 가중치
   */
  _addDirectEdge(u, v, w) {
    this.graph[u][v] = w;
  }

  // 그래프 초기화
  clear() {
    for (let i = 0; i < this.graph.length; i += 1) {
      this.graph = createMatrix(this.size, this.size);
    }
  }

  printEdge() {
    console.log("---Matrix Edge---");
    for (let i = 0; i < this.graph.length; i += 1) {
      for (let j = 0; j < this.graph[i].length; j += 1) {
        if (this.graph[i][j]) {
          console.log("(%d, %d, %d)", i, j, this.graph[i][j]);
        }
      }
    }
    console.log("\n-----------------");
  }
}

let matrixGraph = new AdjacencyMatrix(6);

matrixGraph.addUndirectedEdge(0, 1);
matrixGraph.addUndirectedEdge(1, 2);
matrixGraph.addUndirectedEdge(2, 3);
matrixGraph.addUndirectedEdge(0, 3);
matrixGraph.addUndirectedEdge(3, 4);
matrixGraph.addUndirectedEdge(2, 5);
matrixGraph.printEdge();

matrixGraph.clear();

matrixGraph.addDirectEdge(0, 1);
matrixGraph.addDirectEdge(1, 2);
matrixGraph.addDirectEdge(2, 3);
matrixGraph.addDirectEdge(0, 3);
matrixGraph.addDirectEdge(3, 4);
matrixGraph.addDirectEdge(2, 5);
matrixGraph.printEdge();
