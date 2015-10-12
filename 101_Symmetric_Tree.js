/* 101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
But the following is not:
    1
   / \
  2   2
   \   \
   3    3
Note:
Bonus points if you could solve it both recursively and iteratively.

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
 * @return {boolean}
 */
 /* Recursive solution 
 * For each pair of nodes, n1 and n2, on the same height, determine
 * (1) if n1's left subtree is the same as n2's right subtree;
 * (2) if n1's right subtree is the same as n2's left subtree.
 * If yes then compare n1 and n2's value. If the same then return yes to indicate symmetry; if not the same return no.
 * If no then return false to indicate not symmetric.
 */
var isSymmetric = function(root) {
    function helper(n1,n2){
        if(n1===null && n2===null){
            return true;
        }
        if(n1===null || n2===null){
            return false;
        }
        
         var outer = helper(n1.left, n2.right);
         var inner = helper(n1.right, n2.left);
         
         if(!outer || !inner){
             return false;
         }
         else{
             return n1.val===n2.val;
         }
    }
    
    if(root===null){return true;}
    return helper(root.left, root.right);
};