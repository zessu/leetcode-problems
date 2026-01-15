class BSTNode {
  public left: BSTNode | null = null;
  public right: BSTNode | null = null;
  public value: number;
  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  public head: BSTNode | null = null;
  constructor() {}

  public isEmpty() {
    return this.head === null;
  }

  public printHead() {
    console.log(this.head?.value);
  }

  public addNode(val: number) {
    const item = new BSTNode(val);
    let pointer: BSTNode;
    if (this.isEmpty()) return (this.head = item);
    pointer = this.head as BSTNode;
    while (pointer.value !== item.value) {
      if (pointer.value < item.value) {
        if (pointer.right === null) return (pointer.right = item);
        pointer = pointer.right;
      }
      if (pointer.value > item.value) {
        if (pointer.left === null) return (pointer.left = item);
        pointer = pointer.left;
      }
    }
  }

  public search(node: BSTNode | null, val: number) {
    console.log(node?.value, val);
    if (node === null) {
      return false;
    }
    if (node.value === val) {
      return true;
    } else if (node.value < val) {
      return this.search(node.right, val);
    } else {
      return this.search(node.left, val);
    }
  }
}

const mybst = new BST();
mybst.addNode(2);
mybst.addNode(1);
mybst.addNode(5);
mybst.addNode(5);
console.log(mybst.head);
console.log(mybst.search(mybst.head, 5));
