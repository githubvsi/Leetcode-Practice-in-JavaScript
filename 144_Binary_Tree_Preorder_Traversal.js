/* 144. Binary Tree Preorder Traversal

Given a binary tree, return the preorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
   1
    \
     2
    /
   3
return [1,2,3].

Note: Recursive solution is trivial, could you do it iteratively?

***********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* Solution 1: Recursive Traversal
 */
var preorderTraversal = function(root) {
    var arr = [];
    return helper(root);
    
    function helper(node){
        if(node!==null){
            arr.push(node.val);
            arr.concat(helper(node.left));
            arr.concat(helper(node.right));
            return arr;
        }
        return [];
    }
    
};



/* Solution 2: Iterative Traversal using a stack
 * Push root into the stack.
 * While the stack is not empty
 * Pop out the top, record it.
 * Push its right and left child nodes into the stack
*/
var preorderTraversal = function(root) {
   var res = [];
   if(root!==null){
       var helperStk = [root];
       var top;
       while(helperStk.length!==0){
           top = helperStk.pop();
           res.push(top.val);
           if(top.right!==null){
               helperStk.push(top.right);
           }
           if(top.left!==null){
               helperStk.push(top.left);
           }
       }
   }
   
   return res;
};