// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data) {
        if (data < this.data) {
            if (!this.left) {
                this.left = new Node(data)
            } else {
                this.left.insert(data)
            }
        } else {
            if (!this.right) {
                this.right = new Node(data);
            } else {
                this.right.insert(data);
            }
        }
    }
    contains(data) {
        if (data === this.data) {
            return this;
        }
        if (data < this.data) {
            return this.left ? this.left.contains(data) : null;
        }
        return this.right ? this.right.contains(data) : null;
    }
}

const bst = new Node(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);


console.log(bst.contains(7));
console.log(bst.contains(10));
console.log(bst.contains(1));
console.log(bst.contains(18));
console.log(bst.contains(20));

module.exports = Node;
