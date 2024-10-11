// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(arg) {
        this.data = arg;
        this.children = [];
    }
    add(ar) {
        let node = new Node(ar);
        this.children.push(node);
    }

    remove(arg) {
        this.children = this.children.filter(child => child.data != arg);
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        let queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            fn(node);
            queue.push(...node.children);
        }
    }

    traverseDF(fn) {
        let stack = [this.root];

        while (stack.length) {
            const node = stack.pop();
            fn(node);
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
}
const letters = [];
const t = new Tree();
t.root = new Node('e');
t.root.add('w');
t.root.add('f');
t.root.children[0].add('c');

t.traverseDF((node) => {
    letters.push(node.data);
});
console.log(letters);


module.exports = { Tree, Node };
