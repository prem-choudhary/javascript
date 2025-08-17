class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  const result = [];
  const stack = [];
  let current = root;

  while (current || stack.length > 0) {
    // Reach the leftmost node
    while (current) {
      stack.push(current);
      current = current.left;
    }
    // Process the node
    current = stack.pop();
    result.push(current.val);
    // Move to the right subtree
    current = current.right;
  }

  return result;
}
console.log(inorderTraversal);

// Example usage
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log(inorderTraversal(root)); // Output: [4, 2, 5, 1, 3]
