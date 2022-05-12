// Node
class Node {}

/**
 * List Stack
 * @description 연결 리스트를 활용한 스택
 * Pop, Push, Peek 구현
 * Head가 null 인 경우에 예외처리 필요
 */
class ListStack {
  head; // head(top), 첫번째 노드의 참조값을 저장하고 있는 변수

  constructor() {}

  // 데이터가 없는 경우 확인
  isEmpty() {
    return this.head === null;
  }

  // 데이터를 넣을 때
  push(data) {
    // 새로운 노드를 만든다.
    let node = new Node();
    // 생성된 노드에 데이터 주입
    node.data = data;
    // Head(앞선 노드)가 비어있지 않으면
    if (!this.isEmpty()) {
      node.next = this.head;
    }
    // Head는 새로운 노드의 값을 저장
    this.head = node;
  }

  // 데이터를 꺼낼 때
  pop() {
    if (this.isEmpty()) {
      // head가 null인 경우 데이터가 없음
      throw new Error("List Stack is Empty");
    } else {
      let targetNode = this.head;
      // 노드의 데이터를 임시저장
      let tempData = targetNode.data;
      // 삭제할 노드의 다음 노드의 참조값(next)을 저장
      this.head = targetNode.next;
      // 삭제할 노드의 연결을 끊는다.
      targetNode.data = null;
      targetNode.next = null;

      return tempData;
    }
  }

  // 데이터 확인
  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.head.data;
    }
  }
}

const listStack = new ListStack();

listStack.push("a");
listStack.push("b");
listStack.push("c");
listStack.push("d");

console.log("Pop1 Data", listStack.pop());
console.log("pop1", listStack);

console.log("Pop2 Data", listStack.pop());
console.log("pop2", listStack);

console.log("Pop3 Data", listStack.pop());
console.log("pop3", listStack);

listStack.push("e");
console.log("Push e", listStack);

console.log("Peek Data", listStack.peek());

console.log("Final", listStack);
