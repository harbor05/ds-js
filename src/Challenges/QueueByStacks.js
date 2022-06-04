// Stack for Queue
class ArrayStack {
  top = -1;

  constructor(stackSize) {
    this.stack = new Array(stackSize);
  }

  isEmpty() {
    return this.top === -1;
  }

  isFull() {
    return this.top === this.stack.length - 1;
  }

  push(data) {
    if (this.isFull()) {
      throw new Error("Stack is Full");
    } else {
      this.stack[++this.top] = data;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    } else {
      let tempData = this.stack[this.top];
      this.stack[this.top--] = null;
      return tempData;
    }
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stack[this.top];
    }
  }
}

/**
 * 두개의 Stack을 사용한 Queue
 * @description
 * Stack은 후입선출이지만 Queue 구현을 위해 두개의 스택으로 선입선출으로 변경
 * */
class QueueByStacks {
  size = 0; // Queue의 사이즈
  stackA = new ArrayStack(4); // 첫번째 스택 초기화
  stackB = new ArrayStack(4); // 두번째 스택 초기화

  /**
   * 큐에 추가
   * @param data
   */
  enqueue(data) {
    // 첫번째 스택에 데이터를 추가
    this.stackA.push(data);
    ++this.size;
  }

  /**
   * 큐에서 꺼내기
   */
  dequeue() {
    let returnData = null;
    // 두번째 스택은 비어있고, 첫번째 스택이 비어있지 않은 경우
    if (this.stackB.isEmpty() && !this.stackA.isEmpty()) {
      while (!this.stackA.isEmpty()) {
        // stackB에 stackA의 처음 꺼내질 요소를 추가
        this.stackB.push(this.stackA.peek());
        this.stackA.pop();
      }
    }

    if (!this.stackB.isEmpty()) {
      returnData = this.stackB.pop();
      this.size--;
      return returnData;
    }
  }
}

let queueByStacks = new QueueByStacks();

queueByStacks.enqueue("a");
queueByStacks.enqueue("b");
queueByStacks.enqueue("c");
queueByStacks.enqueue("d");

console.log("dequeue1:", queueByStacks.dequeue());

console.log("dequeue2:", queueByStacks.dequeue());

console.log("dequeue3:", queueByStacks.dequeue());

console.log("dequeue4:", queueByStacks.dequeue());

console.log("queueByStacks results:", queueByStacks);
