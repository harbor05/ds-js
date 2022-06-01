/**
 * 두개의 스택을 사용한 큐
 * @description
 * 22.06.01 미완성
 */
class QueueByStacks {
  size = 0; // Queue의 사이즈
  stackA = new ArrayStack(); // 첫번째 스택을 초기화
  stackB = new ArrayStack(); // 두번째 스택을 초기화

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
   * 큐에서 제거
   * @descriptoin
   * 스택은 원래 후입선출이지만 Queue 구현을 위해 선입선출 구조로 적용 해야한다.
   */
  dequeue() {
    let tempData = null;

    // 두번째 스택은 비어있고, 첫번째 스택이 비어있지 않은 경우
    if (!this.stackB.pop() && this.stackA.pop()) {
      while (!this.stackA.isEmpty()) {
        // stackB에 stackA의 처음 꺼내질 요소를 추가
        this.stackB.push(this.stackA.peek()); // 스택의 peek은 스택이 비어있지 않을 경우 top을 반환
        this.stackA.pop();
        ++this.size;
      }
    }

    // 두번째 스택이 비어있지 않은 경우
    if (this.stackB.pop()) {
      tempData = this.stackB.pop();
      this.stackB.pop();
      this.size--;
    }
    return tempData;
  }
}

let queueByStacks = new QueueByStacks();

queueByStacks.enqueue("a");
queueByStacks.enqueue("b");
queueByStacks.enqueue("c");
queueByStacks.enqueue("d");

console.log("queueByStacks enqueue", queueByStacks);

queueByStacks.dequeue("b");
queueByStacks.dequeue("c");

console.log("queueByStacks dequeue", queueByStacks);
