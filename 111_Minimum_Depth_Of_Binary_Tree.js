/* 111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
*********************************************************************************************/


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
 /* Maximum depth vs. Minimum depth
  * Maximum depth: traverse till the leaf node with the longest path
  * Minimum depth: an error would occur if use similar solution for finding the max depth. Specifically, change the last statement to return Math.min(helper(node.left, cnt), helper(node.right), cnt). Please refer the the comment below this solution. Traverse will end at the first node that has only 1 child. For example, [1, 2, null] would return 1, instead of 2, in this case. Therefore, the ending node has to be a leaf node.
  * How to prevent traversing to ending at a node with only 1 child:
  * Solution 1:  if a node has 1 child, traverse from this node to its child, whichever exists, then keep traversing recursivly.
  * Solution 2: set the depth of the NON-existing child node INT_MAX, then return the subtree with less depth, so as this path will not be considered.
 */
 /* Solution 1
  * In the helper function, count of the depth is returned, and passed in as a parameter recursively.
  */
var minDepth = function(root) {
    var cnt = 0;
    // if the binary tree is empty
    if(root===null){
        return cnt;
    }
    // if not empty
    cnt++;
    return helper(root, cnt);
    
    function helper(node, cnt){
        // leaf node
        if(node.left===null && node.right===null){
            return cnt;
        }
        // has only 1 child, move to the child node
        if(node.left===null || node.right===null){
            node = node.left || node.right;
            cnt++;
            return helper(node, cnt);
        }
        // has 2 children
            cnt++;
            return Math.min(helper(node.left, cnt), helper(node.right, cnt));
    }
};

/* Find the maximum depth of binary tree
    var cnt = 0;
    return helper(root, cnt);
    
    function helper(node, cnt){
        if(node===null){
            return cnt;
        }
        cnt++;
        return Math.max(helper(node.left, cnt), helper(node.right, cnt));
    } */



/* Solution 2:
 * For each node, compare the depth of both subtree, return the one with less depth.
 */
var minDepth = function(root) {
    // if the binary tree is empty
    if(root===null){
        return 0;
    }
    // if not empty
    var lDepth = minDepth(root.left);
    var rDepth = minDepth(root.right);
    
     // leaf node
     if(lDepth===0 && rDepth===0){
         return 1;
     }
     // has only 1 child, make the depth of the non-exsting child MAX_SAFE_INTEGER
     if(lDepth===0){
         lDepth = Number.MAX_SAFE_INTEGER;
     }
     if(rDepth===0){
         rDepth = Number.MAX_SAFE_INTEGER;
     }
     // has 2 children
     return Math.min(lDepth, rDepth)+1;

};