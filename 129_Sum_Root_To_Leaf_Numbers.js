/* 129. Sum Root to Leaf Numbers

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,

    1
   / \
  2   3
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.

*************************************************************************************/

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
 /* Solution: recursive traversing
  * Create an array to hold all generated numbers.
  * If a node is not leaf, use the node val to generator a new number, based on the number passed as an argument, and keep traversing its left and right subtrees, respectively.
  * If a node is leaf, se the node val to generator a new number, based on the number passed as an argument, then push the generated number to the array.
  * Note: Traversal stops ONLY when it reaches the leaf node.
 */
var sumNumbers = function(root) {
    var result = [];
    var sum = 0;
    if(root===null){
        return sum;
    }
    numGenerator(root, 0);
    for(var i=0; i<result.length; i++){
        sum += result[i];
    }
    return sum;
    
    function numGenerator(node, num){
        // when reaches the leaf node, push the generated number to result
        if(node.left===null && node.right===null){
            result.push(num*10+node.val);
        }
        // if no left subtree, traversing should NOT stop at this node. Instead, keep traversing the right subtree
        else if(node.left===null){
            numGenerator(node.right, num*10+node.val);
        }
        // if no right subtree, traversing should NOT stop at this node. Instead, keep traversing the left subtree        
        else if(node.right===null){
            numGenerator(node.left, num*10+node.val);
        }
        // if it has both subtree, keeptraverse both
        else{
            numGenerator(node.left, num*10+node.val);
            numGenerator(node.right, num*10+node.val);
        }
    }
};