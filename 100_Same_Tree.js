/* 100. Same Tree

Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

 ****************************************************************************************/

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

 /* Solution: Recursive comparison
  * For each pair of corresponding nodes, compare their left subtree and right subtree. 
  * If p's left subtree is different than q's left subtree, 
    or
    p's right subree is different than q's right subtree, return false to indicate they are not same trees
  * If the left subtrees are the same, and the right subtrees are the same too, compare the value of nodes. If not the same, return false
 */
var isSameTree = function(p, q) {
    
    // helper function 
    function isSameTree(n1, n2){
        if(n1===null && n2===null){	
            return true;
        }
        if(n1===null || n2===null){
            return false;
        }
        var left = isSameTree(n1.left, n2.left);
        var right = isSameTree(n1.right, n2.right);
        // If p's left subtree is different than q's left subtree, or p's right subree is different than q's right subtree, return false to indicate they are not same trees
        if(!left || !right){
            return false;
        }
        // If the left subtrees are the same, and the right subtrees are the same too, compare the value of nodes.
        else {
            return n1.val===n2.val;
        }
    }
    
    return isSameTree(p,q);
};