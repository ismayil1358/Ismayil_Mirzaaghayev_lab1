// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const counters = [0];
    const queue = [root, 'end'];
  
    while (queue.length > 1) {
      const node = queue.shift();
  
      if (node === 'end') {
        counters.push(0);
        queue.push('end');
      } else {
        counters[counters.length - 1]++;
  
        queue.push(...node.children);
      }
    }
  
    return counters;
  }

  const tree1 = {
    value: 0,
    children: [
        { value: 1, children: [{ value: 4, children: [] }] },
        { value: 2, children: [] },
        { value: 3, children: [{ value: 5, children: [] }] }
    ]
};

console.log(levelWidth(tree1));
  

module.exports = levelWidth;
