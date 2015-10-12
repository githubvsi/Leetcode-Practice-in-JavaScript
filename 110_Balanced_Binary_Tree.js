/* 110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

***************************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 /* Solution: Recursive traversal
  * The height of the tree equals to 1 + Math.max(height of left subtree, height of right subtree)
  * If the node is a leaf, then leaf.left === null and leaf.right === null. Define treeDepth(null) as 0, so treeDepth(leaf)===1
  * For any subtree, if the left and right subtree have height difference larger than 1, then it is unbalanced from this node. Return -1 to indicate the unbalance.
  * For any subtree, if the left or right subtree returns -1, then no need for more traversal, return -1.
  * For the root node, it returns -1 then not a balance tree. Otherwise it is.
 */
var isBalanced = function(root) {
	// Definition of a helper function for recursive traversal
    function treeDepth(node){
        if(node===null){	// leaf node
            return 0;
        }
        // The height of left and right subtree for a certain node
        var left = treeDepth(node.left);
        var right = treeDepth(node.right);
        // If any of the left of right subtree returns -1, it is already unbalanced.
        if(left===-1 || right===-1){
            return -1;
        }
        // If the height difference is larger than 1, it is unbalanced.
        if(Math.abs(left-right)>=2){
            return -1;
        }
        
        // If both left and right subtrees are balanced, return the height of the current node
        return Math.max(left, right)+1;
    }
    
    // If the height is -1, suggesting it is not balanced.
    // Otherwise it returns the height, suggesting it is balanced.
    return treeDepth(root)!==-1 ? true:false;
};