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
        this.root = this.buildTree(array, 0, array.length - 1);
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

    // Create a method to insert a new value
    insert(value, currentRoot) {
        // Check if a root is a null
        if (currentRoot === null) {
            return currentRoot = new Node(value);
        }

        // Compare the value with the current root
        if (value < currentRoot.data) {
            currentRoot.left = this.insert(value, currentRoot.left);
        } else {
            currentRoot.right = this.insert(value, currentRoot.right);
        }

        return currentRoot;
    }

    // Create a method to delete a node with no child in the tree
    deleteNodeNoChild(value, currentRoot) {
        // If the current root is null, we return null
        if (currentRoot === null) return null;

        // Check if the value is equal to the current root
        if (value === currentRoot.data) {
            return currentRoot = null;
        }

        // Traverse and compare the value with the current root
        if (value < currentRoot.data) {
            currentRoot.left = this.deleteNodeNoChild(value, currentRoot.left);
        } else {
            currentRoot.right = this.deleteNodeNoChild(value, currentRoot.right);
        }

        return currentRoot;
    }
}