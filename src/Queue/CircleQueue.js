/**
 * Circle Queue
 * front와 rear가 같은 값이라면 Queue가 꽉 차 있거나 비어(null)있다.
 */
class CircleQueue {
  front = 0; // 꺼낼 데이터의 index, 배열의 크기를 넘지 않는다
  rear = 0; // 넣을 데이터의 index, 배열의 크기를 넘지 않는다.

  constructor(size) {
    // Array 생성자가 배열 요소에 대해서 undefined를 반환하기 때문에 null로 할당
    this.queue = new Array(size).fill(null);
  }

  // 데이터 추가
  add(data) {
    console.log(this.queue);
    if (this.front === this.rear && this.queue[this.rear] !== null) {
      throw new Error("Queue is Full");
    }
    this.queue[this.rear] = data;
    ++this.rear;
    this.rear = this.rear % this.queue.length; // rear가 배열의 길이를 넘지 않도록 한다.
  }

  // 데이터 꺼내기
  poll() {
    let tempData;
    if (this.front === this.rear && this.queue[this.front] === null) {
      return null;
    }
    tempData = this.queue[this.front];
    this.queue[this.front] = null;
    ++this.front;
    this.front = this.front % this.queue.length; // front가 배열의 길이를 넘지 않도록 한다.
    return tempData;
  }
}

let circleQueue = new CircleQueue(4);

circleQueue.add("1");
circleQueue.add("2");
circleQueue.add("3");
console.log("1, 2, 3 추가 후", circleQueue);

console.log("poll : %s\n", circleQueue.poll());
console.log("Poll 후", circleQueue);

console.log("4 추가");
circleQueue.add("4");
console.log("4추가 후", circleQueue);

console.log("poll : %s\n", circleQueue.poll());
console.log("poll : %s\n", circleQueue.poll());
console.log(circleQueue);

circleQueue.add("5");
circleQueue.add("6");
console.log("5, 6 추가 후", circleQueue);

console.log("poll : %s\n", circleQueue.poll());
console.log("Poll", circleQueue);

console.log("poll : %s\n", circleQueue.poll());
console.log("poll : %s\n", circleQueue.poll());
console.log("Final", circleQueue);
