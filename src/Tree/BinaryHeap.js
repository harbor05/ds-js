/*! *****************************************************************************
- Binary Heap (MaxHeap / MinHeap)
- 2022.07.02 In progress
***************************************************************************** */

/**
 * @class MinHeap
 *
 * @description
 * 낮은 값이 우선 순위가 높은 최소 Heap
 */
class MinHeap {}

/**
 * @class MaxHeap
 *
 * @description
 * 큰 값이 우선 순위가 높은 최대 Heap
 */
class MaxHeap {
  queue = [];
  size = 0;

  constructor(size) {
    this.queue = new Array(size).fill(null);
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Heap is Empty");
    }
    return this.queue[0];
  }

  // get left child index
  leftChildIndex(index) {
    return index * 2 + 1;
  }

  // get right child index
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  isExistLeftChild(index) {
    return this.leftChildIndex(index) < this.size;
  }

  isExistRightChild(index) {
    return this.rightChildIndex(index) < this.size;
  }

  /**
   * Add
   * @param {Number} data
   */
  add(data) {
    if (this.size === this.queue.lenght) {
      this.queue = this.queue.slice(this.size + 4);
    }
    this.queue[this.size++] = data;
    this.upHeap(this.size - 1);
  }

  /**
   * Parent Index
   * @param {Number} index - target index
   * @return {Number} parent index
   */
  parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  /**
   * Swap Method
   * @param {Number} index - target index
   * @param {Number} idx - parent index
   */
  swap(index, idx) {
    let tempValue = this.queue[index];
    this.queue[index] = this.queue[idx];
    this.queue[idx] = tempValue;
  }

  /**
   * Up Heap
   *
   * @description
   * Swap with Parent node
   * @param {Number} index
   */
  upHeap(index) {
    if (index <= 0) {
      return;
    }
    let parentIndex = this.parentIndex(index);
    if (this.queue[index] > this.queue[parentIndex]) {
      this.swap(index, parentIndex);
      this.upHeap(parentIndex);
    }
  }

  /**
   * Down Heap
   * @description
   * 자식 노드 중에 우선 순위가 높은 자식과 swap
   * @param {Number} index
   * @returns
   */
  downHeap(index) {
    if (!this.isExistLeftChild(index)) {
      return;
    }
    let leftChildIndex = this.leftChildIndex(index);
    let rightChildIndex = this.rightChildIndex(index);
    if (this.isExistRightChild(index)) {
      // 양쪽 자식 노드가 모두 존재하는 경우
      let maxValue = Math.max(
        this.queue[index],
        Math.max(this.queue[leftChildIndex], this.queue[rightChildIndex])
      );
      if (maxValue === this.queue[leftChildIndex]) {
        this.swap(leftChildIndex, index);
        this.downHeap(leftChildIndex);
      } else if (maxValue === this.queue[rightChildIndex]) {
        this.swap(rightChildIndex, index);
        this.downHeap(rightChildIndex);
      }
    } else {
      // 좌측 자식 노드만 존재하는 경우
      let _maxValue = Math.max(this.queue[index], this.queue[leftChildIndex]);
      if (_maxValue === this.queue[leftChildIndex]) {
        this.swap(leftChildIndex, index);
        this.downHeap(leftChildIndex);
      }
    }
  }

  /**
   * Remove Method
   *
   * @description
   * Binary heap은 루트 노드만 삭제
   * @returns
   */
  remove() {
    if (this.isEmpty()) {
      throw new Error("Heap is Empty");
    }
    let data = this.queue[0];
    this.swap(0, this.size - 1);
    this.queue[this.size - 1] = 0;
    this.size--;
    this.downHeap(0);
    return data;
  }
}

let maxHeap = new MaxHeap(4);
maxHeap.add(4);
maxHeap.add(1);
maxHeap.add(5);
maxHeap.add(2);
maxHeap.add(3);
maxHeap.add(6);
console.log("----Max Heap----");

console.log("MaxHeap", maxHeap);
while (!maxHeap.isEmpty()) {
  console.log("MaxHeap Remove result:", maxHeap.remove());
}

// let minHeap = new MinHeap();
// minHeap.add(4);
// minHeap.add(1);
// minHeap.add(5);
// minHeap.add(2);
// minHeap.add(3);
// minHeap.add(6);
// console.log("----Min Heap----");
