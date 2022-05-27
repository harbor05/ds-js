// Node
class Node {}

/**
 * List Queue
 * @description
 * 필요할 때만 메모리를 할당하고 적재할 수 있다.
 */
class ListQueue {
  front = null; // 꺼내야할 노드, Queue가 비어있는 경우
  rear = null; // Queue가 비어있는 경우

  isEmpty() {
    return this.front === null;
  }

  /**
   * 데이터 넣기
   * @param {String} data
   */
  add(data) {
    let node = new Node();
    node.data = data;
    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      // 이미 노드가 존재할 경우, 마지막 노드에 추가
      this.rear.next = node;
      this.rear = node;
    }
  }

  // data 꺼내기
  poll() {
    if (this.isEmpty()) {
      return null;
    } else {
      let targetNode = this.front;
      let tempData = targetNode.data;
      this.front = targetNode.next;

      if (targetNode === this.rear) {
        this.rear = null;
        this.front = null;
      }
      return tempData;
    }
  }
}

let listQueue = new ListQueue();

listQueue.add("1");
listQueue.add("2");
listQueue.add("3");
console.log("added", listQueue);

console.log(("poll : %s\n", listQueue.poll()));
console.log("poll", listQueue);

listQueue.add("4");
console.log("4 added", listQueue);

console.log("poll : %s\n", listQueue.poll());
console.log("poll : %s\n", listQueue.poll());
console.log(listQueue);

listQueue.add("5");
listQueue.add("6");
console.log("5,6 added", listQueue);

console.log("poll : %s\n", listQueue.poll());
console.log(listQueue);

console.log("poll : %s\n", listQueue.poll());
console.log("poll : %s\n", listQueue.poll());
console.log("Final", listQueue);
