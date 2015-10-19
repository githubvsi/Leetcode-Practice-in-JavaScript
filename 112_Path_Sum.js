/* 112. Path Sum

 Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
 			  5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

*******************************************************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
 /* Solution: recursive traversal
  * For each node, check if it is a leaf. 
  * If yes, get the sum and compare with the target sum;
  * If no, get the sum, pass to its left and right subtree.
  */
var hasPathSum = function(root, sum) {
    var s = 0;
    return helper(root, s, sum);
    
    function helper(parent, sum, target)
    {
        if(parent===null){
            return false;
        }
        sum += parent.val;
        // if the node is leaf
        if(parent.left===null && parent.right===null){
            return(sum===target);
        }
        else{
            return helper(parent.left, sum, target) || helper(parent.right, sum, target);
        }
    }
};