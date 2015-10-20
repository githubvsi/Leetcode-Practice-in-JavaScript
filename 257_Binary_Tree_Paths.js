/* 257. Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

For example, given the following binary tree:

   1
 /   \
2     3
 \
  5
All root-to-leaf paths are:

["1->2->5", "1->3"]

********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
 /* Solution: Top to bottom recursion
  */
var binaryTreePaths = function(root) {
    var result = [];
    if(root!==null){
        helper(root, '');
    }
    return result;
    
    function helper(node, str){
        // no check if node===null because the check is done before pass node to this function
        if(node.left){
            helper(node.left, str+'->'+node.val);
        }
        if(node.right){
            helper(node.right, str+'->'+node.val);
        }
        // If node is leaf, add val to str and push str to result
        if(node.left===null && node.right===null){
            str = str+'->'+node.val;
            str = str.slice(2, str.length); // remove the first '->'
            result.push(str);
        }
    }
};