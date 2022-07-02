class RootNode {
  key = null;
  left = null;
  right = null;
}

/**
 * @class Binary Search Tree
 *
 */
class BinarySearchTree {
  root = new RootNode();
  /**
   * Insert Node
   *
   * @param {Object} x - Node
   * @param {Object} newNode - New Node
   * @returns
   */
  insertNode(x, newNode) {
    if (x === null) {
      return newNode;
    } else if (newNode.key < x.key) {
      x.left = this.insertNode(x.left, newNode);
    } else {
      x.right = this.insertNode(x.right, newNode);
    }
    return x;
  }

  /**
   * Remove Node
   *
   * @description
   * 노드 키 스왑하기
   * @param {Object} x - Node
   * @param {Number} key
   * @returns
   */
  removeNode(x, key) {
    console.log("remove", x, key);
    if (x === null) {
      console.log("removeNode: 노드를 찾을 수 없습니다.", x);
      return;
    } else if (key < x.key) {
      x.left = this.removeNode(x.left, key);
    } else if (key > x.key) {
      x.right = this.removeNode(x.right, key);
    } else {
      if (x.left !== null) {
        let predecessor = this.getLargestNode(x.left);
        let removeKey = x.key;
        x.key = predecessor.key;
        predecessor.key = removeKey;
        x.left = this.removeNode(x.right, key);
      } else if (x.right !== null) {
        let successor = this.getSmallestNode(x.right);
        let removeKey = x.key;
        x.key = successor.key;
        successor.key = removeKey;
        x.right = this.removeNode(x.right, key);
      } else {
        return null;
      }
    }
    return x;
  }

  /**
   * Search Node
   *
   * @param {Number} x
   * @param {Number} key
   * @returns {Object} node
   */
  searchNode(x, key) {
    let node = x;
    if (node === null) {
      console.log("searchNode: 노드를 찾을 수 없습니다.");
      return;
    } else if (key < node.key) {
      node = this.searchNode(x.left, key);
    } else if (key > node.key) {
      node = this.searchNode(x.right, key);
    }
    return node;
  }

  /**
   * 노드 배치를 위한 큰 값 찾기
   * @param {Object} x - Node
   * @returns
   */
  getLargestNode(x) {
    if (x.right === null) {
      return x;
    }
    return this.getLargestNode(x.right);
  }

  /**
   * 노드 배치를 위한 작은 값 찾기
   * @param {Object} x - Node
   * @returns
   */
  getSmallestNode(x) {
    if (x.left === null) {
      return x;
    }
    return this.getSmallestNode(x.left);
  }

  /**
   * 노드 추가
   *
   * @param {Number} key
   */
  add(key) {
    let _root = new RootNode(); // New node
    _root.key = key;

    if (this.root === null) {
      this.root = _root;
    } else {
      this.root = this.insertNode(this.root, _root);
    }
  }

  search(key) {
    this.searchNode(this.root, key).key;
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  printTree() {}

  // 중위 순회
  ignoredTraversal(x) {
    if (x === null) {
      return;
    }
    this.ignoredTraversal(x.left);
    // console.log("%d", x.key);
    this.ignoredTraversal(x.right);
  }

  traversal() {
    this.ignoredTraversal(this.root);
    console.log("");
  }
}

let bst = new BinarySearchTree();

bst.add(5);
bst.add(2);
bst.add(9);
bst.add(3);
bst.add(7);
bst.add(4);
bst.add(8);
bst.add(1);
bst.add(6);

bst.printTree();
bst.traversal();

bst.remove(9);
bst.printTree();
