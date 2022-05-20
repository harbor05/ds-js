// Node
class Node {}

/**
 * Doubly Linked List
 * @description 이중 연결 리스트
 * 노드가 좌측 노드의 참조값과 우측 노드의 참조값을 저장하는 변수를 가지고 있음
 * Head - 맨 앞, Tail - 맨 뒤
 */
class DoubleLinkedList {
  // 중간 노드는 left, right를 모두 가지고 있음
  // head 노드는 left next가 null임
  head = null;
  tail = null;
  size = 0;

  isEmpty() {
    return this.size === 0;
  }

  getNodeSize() {
    return this.size;
  }

  findNode(targetIndex) {
    let pointer;
    let nodeIndex;

    if (targetIndex < 0 || this.size <= targetIndex) {
      throw new Error(`Find Node: Wrong Node Size, ${targetIndex}`);
    }

    // targetIndex가 중간 인덱스 보다 클 경우
    if (this.size / 2 > targetIndex) {
      // 앞에서 부터 찾기
      pointer = this.head;
      nodeIndex = 0;
      while (nodeIndex !== targetIndex) {
        ++nodeIndex;
        pointer = pointer.right;
      }
    } else {
      // 뒤에서 부터 찾기
      pointer = this.tail;
      nodeIndex = this.size - 1;
      while (nodeIndex !== targetIndex) {
        ++nodeIndex;
        pointer = pointer.left;
      }
    }
    return pointer;
  }

  getData(targetIndex) {
    return this.findNode(targetIndex).data;
  }

  // 노드 삽입
  add(index, data) {
    let node = new Node();
    node.data = data;
    if (index === 0 || this.size === index) {
      // 처음으로 노드를 삽입 할 경우
      if (this.head === null && this.tail === null) {
        this.head = node;
        this.tail = node;
      } else if (index === 0) {
        // 맨 앞(head)에 노드를 삽입 할 경우
        node.right = this.head; // 새로운 노드의 right에 처음 head가 가르키던 참조 값 저장
        this.head.left = node; // 후행(tail) 쪽 left에 head의 참조 값(새로운 노드)을 저장
        this.head = node; // 새로운 노드의 참조 값을 head에 저장
      } else {
        // 맨 뒤(tail)에 노드를 삽입 할 경우
        node.left = this.tail; // 새로운 노드의 left에 처음 tail이 가르키던 참조 값을 저장한다.
        this.tail.right = node; // 선행(head) 쪽 right에 head의 참조 값(새로운 노드)을 저장
        this.tail = node; // 새로운 노드의 참조 값을 tail에 저장
      }
    } else {
      // 중간에 노드를 삽입할 경우
      let targetNode = this.findNode(index);
      node.right = targetNode; // 새로운 노드의 right에 찾은 노드를 넣 기
      targetNode.left = node; // 찾은 노드의 left에 새로운 노드를 저장
      node.left = targetNode.left; // 새로운 노드의 left에 찾은 노드의 left를 저장
      targetNode.left.right = node; // 찾은 노드의 left노드의 right에 새로운 노드를 저장
    }
    // 노드 삽입 시 사이즈 증가
    ++this.size;
  }

  // 맨앞에 노드 삽입
  addFirst(data) {
    this.add(0, data);
  }

  // 맨 마지막에 노드 삽입
  addLast(data) {
    this.add(this.size, data);
  }

  /**
   * 노드 제거
   * @param {Number} index
   */
  remove(index) {
    let targetNode = this.findNode(index);
    let leftNode = targetNode.left; // 제거하려는 노드의 선행(head 쪽) 노드
    let rightNode = targetNode.right; // 제거하려는 노드의 후행(tail 쪽) 노드

    if (leftNode) {
      // 타겟 노드에 좌측 노드가 존재하는 경우, right에 우측 노드 저장
      leftNode.right = rightNode;
    }

    if (rightNode) {
      // 타겟 노드에 우측 노드가 존재하는 경우, left에 좌측 노드 저장
      rightNode.left = leftNode;
    }
    // 첫 노드일 경우
    if (index === 0) {
      this.head = rightNode;
    }
    // 마지막 노드일 경우
    if (index === this.size - 1) {
      this.tail = leftNode;
    }
    // 제거할 노드에 모두 null 값 저장
    targetNode.left = null;
    targetNode.right = null;
    targetNode.data = null;
    // 노드 제거 후 길이 감소
    this.size--;
  }

  // 맨앞 노드 제거
  removeFirst() {
    this.remove(0);
  }

  // 마지막 노드 제거
  removeLast() {
    this.remove(this.size - 1);
  }
}

let doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.add(0, "B");
console.log("add", doubleLinkedList);

doubleLinkedList.add(1, "A");
console.log("add", doubleLinkedList);

doubleLinkedList.add(0, "E");
console.log("add", doubleLinkedList);

doubleLinkedList.addLast("D");
console.log("addLast", doubleLinkedList);

doubleLinkedList.remove(0);
console.log("remove0", doubleLinkedList);

doubleLinkedList.remove(2);
console.log("remove2", doubleLinkedList);

doubleLinkedList.removeFirst();
console.log("removeFirst", doubleLinkedList);

doubleLinkedList.removeLast();
console.log("removeLast", doubleLinkedList);

console.log("노드의 개수:%d\n", doubleLinkedList.getNodeSize());
