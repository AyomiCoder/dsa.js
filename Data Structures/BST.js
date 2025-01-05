class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root, min = null, max = null) {
    if (!root) {
        return true;
    }

    if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) {
        return false;
    }

    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(20);

console.log(isValidBST(root));