/* 104. Maximum Depth of Binary Tree
 * Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**********************************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 /* Solution: recursive traversal
  */
var maxDepth = function(root) {
    var cnt = 0;
    return helper(root, cnt);
    
    function helper(node, cnt){
        if(node===null){
            return cnt;
        }
        cnt++;
        return Math.max(helper(node.left, cnt), helper(node.right, cnt));
    }
};