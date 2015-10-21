/* 199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

For example:
Given the following binary tree,
   1            <---
 /   \
2     3         <---
 \      
  5             <---
You should return [1, 3, 5].

********************************************************************************************/

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
/* Solution: BFS traversal
 * Starting from level 1, push root into an array.
 * Record the first(rightmost) node in another array.
 * Push its right child node, and left child node into the array.
 * Pop out root from the array.
 * Now the array contains all nodes in level 2. 
 * Record the first(rightmost) node.
 * For each node in the array, push its right child node, and left child node into the array.
 * Pop out all nodes in level 2, leaving all nodes in level 3.
 * Keep traversing all nodes in the tree until the array has no nodes - that is, the last level has no child nodes, and all nodes in the last level have been all deleted.
 */
var rightSideView = function(root) {
    var bfsArray = [root];
    var result = [];
    var i, len;
    
    if(root===null){
        return [];
    }
    // one while loop per level
    // loop ends when the last level (which does not exist) has zero nodes
    while(bfsArray.length!==0){
        // Push the first/rightmost node to result
        result.push(bfsArray[0].val);
        
        // Add all child nodes of each of the parent nodes from the previous level, right to left
        len = bfsArray.length;
        for(i=0; i<len; i++){
            if(bfsArray[i].right!==null){
                bfsArray.push(bfsArray[i].right);
            }
            if(bfsArray[i].left!==null){
                bfsArray.push(bfsArray[i].left);
            }
        }
        
        // After all the child nodes are added, delete the parent nodes
        bfsArray.splice(0,i);
    }
    return result;
};