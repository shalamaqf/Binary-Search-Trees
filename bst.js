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

    // Create a method to get the sucessor
    getSuccessor(current) {
        current = current.right;
        while (current !== null && current.left !== null) {
            current = current.left
        }
        return current.data;
    }

    // Create a method to delete a node
    delete(value, currentRoot) {
        // Check if the current root is null
        if (currentRoot === null) return null;

        if (value < currentRoot.data) {
            currentRoot.left = this.delete(value, currentRoot.left);
        } else if (value > currentRoot.data) {
            currentRoot.right = this.delete(value, currentRoot.right);
        } else {
            // Check if targeted node has no child or one child
            if (currentRoot.left === null) {
                return currentRoot.right;
            } else if (currentRoot.right === null) {
                return currentRoot.left
            } else {
                // If targeted node has two childs
                const successor = this.getSuccessor(currentRoot);
                currentRoot.data = successor;
                currentRoot.right = this.delete(successor, currentRoot.right);
            }
        }

        return currentRoot;
    }

    // Create a method to find the node with given value
    find(value, currentRoot) {
        // Check if the current root is null
        if (currentRoot === null) return null;

        // Check if the value is equal to the current root
        if (value === currentRoot.data) return currentRoot;

        // Traverse the tree
        if (value < currentRoot.data) {
            return this.find(value, currentRoot.left);
        } else {
            return this.find(value, currentRoot.right);
        }
    }

    // Create a method to print the tree in level order
    levelOrderForEach(node) {
        // Check if the node is null
        if (node === null) return;

        // Create an array with queue behaviour
        let queue = [];

        // Push the node in to the queue
        queue.push(node);

        // Create an array to contain the node in level order
        let levelOrder = [];

        // Loop while the queue is not null to print the node and its children
        while (queue.length !== 0) {
            // Create a variable to keep in track the first element of the queue
            let current = queue.shift();

            // Push the current node to levelOrder array
            levelOrder.push(current.data);

            // Push the first children to the queue if it's not null
            if (current.left !== null) queue.push(current.left);
            if (current.right !== null) queue.push(current.right);
        }

        return levelOrder;
    }
    
    // Create a method to returns an array contains tree nodes in the in order
    inOrder(root) {
        let array = [];
        this.inOrderTraversal(array, root);
        return array;
    }

    // Create a method to traverse the tree in order
    inOrderTraversal(array, root) {
        // Check if the root is not null
        if (root === null) return;
        this.inOrderTraversal(array, root.left);
        array.push(root.data);
        this.inOrderTraversal(array, root.right);
    }

    // Create a method to returns an array contains tree nodes in the pre order
    preOrder(root) {
        let array = [];
        this.preOrderTraversal(array, root);
        return array;
    }

    // Create a method to traverse the tree on pre order
    preOrderTraversal(array, root) {
        // Check if the root is null
        if (root === null) return;
        array.push(root.data);
        this.preOrderTraversal(array, root.left);
        this.preOrderTraversal(array, root.right);
    }

    // Create a method to returns an array contains tree nodes in the post order
    postOrder(root) {
        let array = [];
        this.postOrderTraversal(array, root);
        return array;
    }

    // Create a method to traverse the tree on post order
    postOrderTraversal(array, root) {
        // Check if the root is null
        if (root === null) return;
        this.postOrderTraversal(array, root.left);
        this.postOrderTraversal(array, root.right);
        array.push(root.data);
    }

    // Create a method to find the node for compute the height
    findNode(value, currentRoot) {
        // Check if the current root is null
        if (currentRoot === null) return -1;

        // Check if the value is equal with the current root
        if (value === currentRoot.data) return currentRoot;

        // Find the node
        if (value < currentRoot.data) {
            return this.findNode(value, currentRoot.left);
        } else {
            return this.findNode(value, currentRoot.right);
        }
    }
}