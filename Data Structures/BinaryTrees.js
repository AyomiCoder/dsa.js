class TreeNode {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

console.log(root);

// // Traversing a Binary Tree
// Explanation: Traversal means visiting all the nodes in a specific order. There are three main types of depth-first traversal:

// Inorder: Left → Root → Right
// Preorder: Root → Left → Right
// Postorder: Left → Right → Root

// Inorder Traversal
// Inorder traversal means visiting the left subtree, then the root, and finally the right subtree. This is the most common type of traversal.

// Here is the code to perform an inorder traversal:

function inorderTraversal(node) {
    if(node === null) {
        return;
    }
    inorderTraversal(node.left);
    console.log(node.value);
    inorderTraversal(node.right);
}

inorderTraversal(root);

// Preorder Traversal
// Preorder traversal means visiting the root node first, then the left subtree, and finally the right subtree.

// Here is the code to perform a preorder traversal:

function preorderTraversal(node) {
    if(node === null) {
        return;
    }
    console.log(node.value);
    preorderTraversal(node.left);
    preorderTraversal(node.right);
}

preorderTraversal(root);

// Postorder Traversal
// Postorder traversal means visiting the left subtree first, then the right subtree, and finally the root node.

// Here is the code to perform a postorder traversal:

function postorderTraversal(node) {
    if(node === null) {
        return;
    }
    postorderTraversal(node.left);
    postorderTraversal(node.right);
    console.log(node.value);
}

postorderTraversal(root);
