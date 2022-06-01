/**
 * Array Stack
 * @description 배열의 인덱스를 활용한 배열 스택
 * Pop, Push, Peek 구현
 * 메모리 문제를 해결하기 위해, 가변 배열 방식이나, 리스트 스택을 활용
 */
class ArrayStack {
  top = -1; // 배열의 타겟 Index, 최소 값은 -1, 최대 값이 배열의 길이

  constructor(stackSize) {
    // Stack Size에 해당하는 배열 생성
    this.stack = new Array(stackSize);
  }

  // 데이터가 없는 경우 확인
  isEmpty() {
    return this.top === -1;
  }

  // 스택이 모두 채워 있는지 확인
  isFull() {
    return this.top === this.stack.length - 1;
  }

  // 데이터를 넣을 때
  push(data) {
    if (this.isFull()) {
      throw new Error("Stack is Full");
    } else {
      // top을 1 증가 시키고 data를 넣는다.
      this.stack[++this.top] = data;
    }
  }

  // 데이터를 꺼낼 때
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is Empty");
    } else {
      // 데이터를 꺼낸다.
      let tempData = this.stack[this.top];
      // 데이터를 꺼낸 곳에 null을 저장하고 top을 1을 감소 시킨다.
      this.stack[this.top--] = null;
      return tempData;
    }
  }

  // 데이터 확인
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stack[this.top];
    }
  }
}

// Stack Size를 넣어주기
let arrayStack = new ArrayStack(4);
console.log("init", arrayStack);

arrayStack.push("a");
arrayStack.push("b");
arrayStack.push("c");
arrayStack.push("d");

console.log("pushed", arrayStack);

console.log("Pop1 Data", arrayStack.pop());
console.log("pop1", arrayStack);

console.log("Pop2 Data", arrayStack.pop());
console.log("pop2", arrayStack);

console.log("Pop3 Data", arrayStack.pop());
console.log("pop3", arrayStack);

arrayStack.push("e");

console.log("Push e", arrayStack);

console.log("Peek Data", arrayStack.peek());

console.log("Final", arrayStack);
