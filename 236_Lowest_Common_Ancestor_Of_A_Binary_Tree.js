/* 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

        _______3______
       /              \
    ___5__          ___1__
   /      \        /      \
   6      _2       0       8
         /  \
         7   4
For example, the lowest common ancestor (LCA) of nodes 5 and 1 is 3. Another example is LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

******************************************************************/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 /* Solution:
  * For each node
  * Case 1:  if it is same as p or q, return itself. There is no need to keep searching for the other target node, because
  * Case 1-a: if the other target node is within its subtrees, then the node itself is the LCA.
  * Case 1-b: if the other target node is not within its subtrees, there must be another node that returns itself.
  * Case 2: if it is not the same as p or q, check its both left and right subtrees.
  * Case 3: if it is null, return null.
  * How to return:
  * If both left or right subtrees are null, indicating no target nodes were found, return null.
  * If one of left and right subtrees returns null, the other does not, return the not-null one.
  * if both left and rught subtrees is not null, return the root, indicating the LCA.

  */
var lowestCommonAncestor = function(root, p, q) {
    if(root===null || root===p || root===q){
        return root;
    }
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
    
    if(left!==null && right!==null){
        return root;
    }
    else if(left===null){
        return right;
    }
    else{
        return left;
    }
    
};