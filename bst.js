// Create a Node class
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Create a Tree class
class Tree {
    constructor(array) {
        this.root = null;
    }

    // Create a method to build a balanced binary search trees
    buildTree(array, start, end) {
        // Check if start is greater than end (base case)
        if (start > end) return null;
        
        // Find mid of the array
        const mid = Math.floor((start + end) / 2);

        // Create a new node as the root
        const node = new Node(array[mid]);

        // Create the left subtree
        node.left = this.buildTree(array, start, mid - 1);

        // Create the right subtree
        node.right = this.buildTree(array, mid + 1, end);

        // Return the node
        return node;
    }
}