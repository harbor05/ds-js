// Node
class Node {}

/**
 * Linked List
 * @description 단일 연결 리스트
 * 각 노드가 하나의 연결만 가지고 다음 노드에 대한 참조값만 저장하여
 * 한줄로 연결되어 있는 방식으로 데이터를 저장하는 구조
 * 나중에 들어온 데이터가 후행, 앞선 데이터가 선행
 */
class LinkedList {
  head = null;
  size = 0;

  isEmpty() {
    return this.size === 0;
  }

  getNodeSize() {
    return this.size;
  }

  /**
   * Find Node
   * @description
   * 중간 삽입, 삭제 시 타겟을 찾기 위한 함수
   * @param {Number} targetIndex 노드의 Index
   * @return {Object} Node
   */
  findNode(targetIndex) {
    // targetIndex가 음수가 되거나 Node의 갯수보다 많을 경우 에러 리턴
    if (targetIndex < 0 || this.size <= targetIndex) {
      throw new Error(`Find Node: Wrong Node Size, ${targetIndex}`);
    }
    let pointer = this.head;
    let nodeIndex = 0;
    // 노드의 참조 값을 이용하여 선택한 인덱스와 노드의 순서가 일치할때 까지 찾는다.
    while (nodeIndex !== targetIndex) {
      ++nodeIndex;
      pointer = pointer.next;
    }
    return pointer;
  }

  /**
   * 찾으려는 Node의 Data
   * @param {Number} targetIndex 찾으려는 노드의 Index
   * @return
   */
  getData(targetIndex) {
    return this.findNode(targetIndex).data;
  }

  /**
   * 중간 노드 삽입
   * @description
   * 삽입할 위치의 이전 노드로 이동한다.
   * 새로운 노드를 생성한다.
   * 선행 노드의 참조값을 새로운 노드에 저장한다.
   * 후행 노드의 참조 값에 새로운 노드의 참조 값을 저장한다.
   */
  add(index, data) {
    // 새로운 노드 생성
    let node = new Node();
    // 노드에 데이터 저장
    node.data = data;

    // 맨앞 노드일 경우
    if (index === 0) {
      // 노드의 참조 값에 head를 저장
      node.next = this.head;
      // head에 노드 저장
      this.head = node;
    } else {
      // 중간 노드 삽입을 위한 이전 노드 찾기
      let foundNode = this.findNode(index - 1); // 이전 노드
      // 새로운 노드의 참조 값에 이전 노드의 참조 값을 저장
      node.next = foundNode.next;
      // 이전 노드의 참조 값에 새로운 노드를 저장
      foundNode.next = node;
    }

    // 노드 삽입 시 사이즈 증가
    ++this.size;
  }

  /**
   * 맨 앞 노드 삽입
   * @description
   * 노드를 생성하고 Head가 가리키는 참조값에 새로운 노드의 참조값을 저장한다.
   * Head에 새로운 노드의 참조값을 저장한다.
   */
  addFirst(data) {
    this.add(0, data);
  }

  /**
   * 마지막 노드 삽입
   * @description
   */
  addLast(data) {
    this.add(this.size, data);
  }

  /**
   * 중간 노드 삭제
   * @description
   * @param {Number} 삭제할 노드의 Index
   * 삭제할 노드의 다음 노드의 참조 값을 Head에 저장한다.
   * 삭제할 노드의 이전 노드로 이동한다.
   * 삭제할 노드의 후행 노드의 참조 값을 선행 노드의 참조값에 저장한다.
   */
  remove(index) {
    // 첫번째 노드가 아니거나 후행 노드가 비어 있지 않은 경우
    if (index === 0 && this.head !== null) {
      this.head = this.head.next;
    } else {
      let foundNode = this.findNode(index - 1);
      foundNode.next = foundNode.next.next;
    }
    // 노드 제거 후 길이 감소
    this.size--;
  }

  /**
   * 맨 앞 노드 삭제
   * @description
   * 삭제할 노드의 다음 노드의 참조 값을 Head에 저장한다.
   */
  removeFirst() {
    this.remove(0);
  }

  /**
   * 마지막 노드 삭제
   */
  removeLast() {
    this.remove(this.size - 1);
  }
}

const linkedList = new LinkedList();

linkedList.addLast("B");
console.log("addLast", linkedList);

linkedList.addFirst("A");
console.log("addFirst", linkedList);

linkedList.addLast("E");
console.log("addLast", linkedList);

linkedList.add(1, "C");
console.log("add", linkedList);

linkedList.add(2, "D");
console.log("add", linkedList);

linkedList.removeLast();
console.log("removeLast", linkedList);

linkedList.remove(1);
console.log("remove", linkedList);

linkedList.removeFirst();
console.log("removeFirst", linkedList);

console.log("Final Size", linkedList.getNodeSize());

console.log("Final Data", linkedList.getData(1));
