import { Tree } from "./bst.js";


const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// 1. Create a tree object
let myTree = new Tree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(prettyPrint(myTree.root));

// 2. Confirm if the tree is balanced
console.log(myTree.isBalanced(myTree.root));

// 3. Print in order, post order, and pre order
console.log(myTree.inOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));

// 4. Insert several numbers > 100 to make the tree unbalanced
myTree.insert(101, myTree.root);
myTree.insert(103, myTree.root);
myTree.insert(102, myTree.root);
myTree.insert(104, myTree.root);

// 5. Confirm if the tree is unbalanced
console.log(myTree.isBalanced(myTree.root));

// 6. Rebalance the tree
myTree.root = myTree.rebalance(myTree.root);

// 7. Confirm if the tree is balanced
console.log(myTree.isBalanced(myTree.root));
console.log(prettyPrint(myTree.root));

// 8. Print in order, post order, and pre order
console.log(myTree.inOrder(myTree.root));
console.log(myTree.postOrder(myTree.root));
console.log(myTree.preOrder(myTree.root));