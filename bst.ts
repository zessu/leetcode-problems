class BSTNode {
  public left: BSTNode | null = null;
  public right: BSTNode | null = null;
  public value: number;
  constructor(value: number) {
    this.value = value;
  }
}

class BST {
  public root: BSTNode | null = null;
  constructor() {}

  public isEmpty() {
    return this.root === null;
  }

  public printHead() {
    console.log(this.root?.value);
  }

  public addNode(val: number) {
    if (this.isEmpty()) this.root = new BSTNode(val);
    else {
      this.insert(this.root as BSTNode, val);
    }
  }

  public insert(node: BSTNode, val: number) {
    if (node.value === val) return;
    if (node.value > val) {
      if (node.left === null) {
        node.left = new BSTNode(val);
      } else {
        return this.insert(node.left, val);
      }
    }
    if (node.value < val) {
      if (node.right === null) {
        node.right = new BSTNode(val);
      } else {
        return this.insert(node.right, val);
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
console.log(mybst.search(mybst.root, 5));
console.log(mybst.root);
